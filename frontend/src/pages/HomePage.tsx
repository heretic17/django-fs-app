import { Link } from 'react-router-dom';

function HomePage() {
    // const [details, setDetails] = useState([])
    return(
        <div>
            <h1>Welcome to City 17</h1>
            <Link to="/table">Go to Table</Link>
        </div>
    )
}

export default HomePage