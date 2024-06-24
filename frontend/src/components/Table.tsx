type Detail = {
    name: string,
    author: string,
    release_date: string
}

type Props = {
    details: Detail[]
}

function Table({ details }: Props) {
    return(
        <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.name}</td>
                <td>{detail.author}</td>
                <td>{detail.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}

export default Table