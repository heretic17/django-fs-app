import { useNavigate  } from "react-router-dom";
import type { Props } from "../types.ts";

function Table({ details }: Props) {
  const history = useNavigate ();

  const handleRowClick = (id: number) => {
    history(`/book/${id}`);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Started</th>
            <th>Finished</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} onClick={() => handleRowClick(detail.id)} style={{ cursor: "pointer" }}>
              <td>{detail.id}</td>
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
  );
}

export default Table;
