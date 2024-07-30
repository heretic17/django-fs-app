type Detail = {
    id: number
    description: string
    name: string,
    author: {
        name: string
    },
    genre: string,
    start_date: string,
    finish_date: string,
}

type Props = {
    details: Detail[]
}

export type {Detail, Props}