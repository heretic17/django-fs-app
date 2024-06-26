type Detail = {
    name: string,
    author: string,
    genre: string,
    start_date: string,
    finish_date: string,
}

type Props = {
    details: Detail[]
}

export type {Detail, Props}