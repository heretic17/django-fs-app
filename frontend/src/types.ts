type Detail = {
    name: string,
    author: string,
    genre: string,
    publish_date: string
}

type Props = {
    details: Detail[]
}

export type {Detail, Props}