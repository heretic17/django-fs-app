import type { Props } from "../types.ts"

function Table({ details }: Props) {
    return(
        <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Started</th>
              <th>Finished</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.name}</td>
                <td>{detail.author.name}</td>
                <td>{detail.genre}</td>
                <td>{detail.start_date}</td>
                <td>{detail.finish_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Table