type Status = 'ok' | 'fail'


interface IPicture  {
    farm: number,
    server: string,
    id: string,
    secret: string,
    title: string
}

interface IFlickPhotos {
    page: number,
    pages: number,
    perpage: number,
    photo: IPicture[],
    total: number
}

interface IFlickResponse {
    code: number,
    message: string,
    stat: Status
}

interface IFlickPhotosResponse extends IFlickResponse {
    photos: IFlickPhotos
}