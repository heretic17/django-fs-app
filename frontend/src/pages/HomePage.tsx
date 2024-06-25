import { Link } from 'react-router-dom';

function HomePage() {
    // const [details, setDetails] = useState([])
    return(
        <>
        <div className='home-container'>
            <h1 className='home-header'>Welcome to City 17</h1>
            <Link className='link-to-table' to="/table">Go to Table</Link>
        </div>
        </>
    )
}

export default HomePage