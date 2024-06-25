import Table from "../components/Table"
import type { Props } from "../types.ts"

function MainPage({ details }: Props) {
    return(
        <Table details={details}  />
    )
}

export default MainPage