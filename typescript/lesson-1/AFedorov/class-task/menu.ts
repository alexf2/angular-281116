/// <reference path="../typings/index.d.ts" />

declare var menuList: Object

type MenuTree = {
    title: string,
    items: MenuTree[]
}

class InstantMenu {
    private root: Element | null 

    constructor(private rootSelector: string, private items: MenuTree[]) {        
    }

    private clickHandler = (ev) => {
        const {target} = ev         
        if (target.tagName.toLowerCase() === 'li')
        {
            //this.internalToggle(target)
            this.toggle(target.textContent)
            ev.stopPropagation()            
        }
    }

    toggle (label: string): void {
        if (this.root) {
            let elem = Array.from(this.root.querySelectorAll('li')).filter( (el) => (el.textContent === label) )
            if (elem.length > 0) {
                this.internalToggle(elem[0])
            }
        }
    }

    private internalToggle (elem: Element): void {
        let test = elem.classList.contains('menu-open');
        if (!test)
            elem.classList.add('menu-open')
        else
            elem.classList.remove('menu-open')
    }

    mount(): void {

        if (this.root)
            throw new Error('Already mounted')

        let r = document.querySelector(this.rootSelector)
        if (!r)
            throw new Error(`The root was not found: ${this.rootSelector}`)
        this.root = r

        r.addEventListener('click', this.clickHandler)

        let menuHost = document.createElement('ul')
        r.appendChild(menuHost)
        this.populate(menuHost, this.items)
    }

    populate(host:Element, items:MenuTree[]) {
        for (let item of items) {
            
            let li = document.createElement('li')
            host.appendChild(li)
            let title = document.createTextNode(item.title)
            li.appendChild(title)

            if (item.items && item.items.length > 0) {
                let newHost = document.createElement('ul')
                li.appendChild(newHost)
                this.populate(newHost, item.items)
            }
        }
    }

    destroy(): void {
        if (!this.root)
            throw new Error('Was not mounted')

        this.root.removeEventListener('click', this.clickHandler)
        this.root.removeChild( document.querySelector('li:first-child') )

        this.root = null
    }
} 


new InstantMenu('nav.menu', menuList).mount()

