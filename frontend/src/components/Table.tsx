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
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.name}</td>
                <td>{detail.author}</td>
                <td>{detail.genre}</td>
                <td>{detail.publish_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Table