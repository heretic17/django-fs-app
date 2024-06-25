import { Link } from 'react-router-dom';

function HomePage() {
    return(
        <>
        <div className='home-container'>
            <h1 className='home-header'>Welcome to The Ebon Codex Archive</h1>
            <Link className='link-to-table' to="/table">Go to Table</Link>
        </div>
        </>
    )
}

export default HomePage