import 'whatwg-fetch'
import * as _ from 'lodash'
import './main.less'

const uri:string = 'https://api.flickr.com/services/rest/?'
const queryMethod:string = 'flickr.photos.search'
const apiKey:string = '7fbc4d0fd04492d32fa9a2f718c6293e'
const defaultLimit:number = 10

class App {    
    private buttonStart: HTMLButtonElement    
    private inputSearch: HTMLInputElement
    private rootSel: string

    constructor (cssSelectorRoot: string) {
        this.rootSel = cssSelectorRoot
        const root = document.querySelector(cssSelectorRoot)
        if (!root)
            throw Error(`Container ${cssSelectorRoot} hasnot found`)

        this.buttonStart = root.querySelector('#startSearch') as HTMLButtonElement 
        if (!this.buttonStart)
            throw Error(`startSearch button has not found`)

        this.buttonStart.addEventListener('click', this.startClickHandler)

        this.inputSearch = root.querySelector('#pictureName') as HTMLInputElement
        if (!this.inputSearch)
            throw Error(`inputSearch button has not found`)
    }

    private get limit(): number {
        const val = parseInt((document.querySelector(this.rootSel)!.querySelector('#topLimit') as HTMLInputElement)!.value)
        
        return isNaN(val) ? defaultLimit:val
    }

    private startClickHandler = (ev: Event): void => {
        ev.preventDefault()
        ev.stopPropagation()        
        
        const searchText = encodeURI(this.inputSearch.value)
        if (/^\s*$/.test(searchText)) {
            this.spinCycle(false, 'Enter a non empty search pattern')
            return
        }

        this.spinCycle(true)
        fetch(`${uri}method=${queryMethod}&api_key=${apiKey}&text=${searchText}&page=1&format=json&nojsoncallback=1&per_page=${this.limit}`, 
        {
             method: 'GET'
        })        
        .then( (rsp: Response) => {                        
            rsp
                .json().then( (result: IFlickPhotosResponse) => {
                    if (result.stat !== 'ok')
                        this.spinCycle(false, result.message)
                    else {
                        this.spinCycle(false)
                        this.populatePhotos(result.photos)
                    }
                } )
                .catch( err => {
                    this.spinCycle(false, err)                    
                })
        })
        .catch( err => {
            this.spinCycle(false, err)
        })
    }

    private populatePhotos(photos: IFlickPhotos) {
        const cont = document.querySelector(this.rootSel)!.querySelector('.resultPane') as HTMLDivElement
        cont.innerHTML = ''

        if (photos.photo.length === 0)
        {
            cont.innerHTML = 'No photos found'
            return
        }

        const ul = document.createElement('ul')
        cont.appendChild(ul)

        for (let item of photos.photo) {
            const li = document.createElement('li')
            ul.appendChild(li)
                .appendChild(document.createTextNode(`${item.title}:\u00A0\u00A0`))
            const img = document.createElement('img')
            img.setAttribute('src', `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`)    
            li.appendChild(img)
            li.appendChild(document.createElement('br'))
        }
    }

    private spinCycle(on: boolean, errObj?: Object): void {
        this.buttonStart.disabled = on
        if (on)
            document.querySelector(this.rootSel)!.querySelector('.errorPane')!.innerHTML = ''
        else if (errObj)
            document.querySelector(this.rootSel)!.querySelector('.errorPane')!.innerHTML = errObj.toString()
    }

    destroy () {
        this.buttonStart.removeEventListener('click', this.startClickHandler)
        delete this.buttonStart    
        delete this.inputSearch        
    }    
}

export = App
