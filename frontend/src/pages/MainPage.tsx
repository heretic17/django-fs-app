import { Link } from "react-router-dom"
import Table from "../components/Table"
import type { Props } from "../types.ts"

function MainPage({ details }: Props) {
    return(
    <>
        <Table details={details}  />
        <Link to={'/'} >Home</Link>
    </>
    )
}

export default MainPage