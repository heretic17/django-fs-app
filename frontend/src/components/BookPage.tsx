import { Link, useParams } from 'react-router-dom';
import { Props } from '../types';

const BookPage = ({ details }: Props) => {
  const { id } = useParams<{ id: string }>();
  const bookId = parseInt(id, 10);
  const book = details.find(book => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
    <div>
      <h1>{book.name}</h1>
      <p>Genre: {book.genre}</p>
      <p>Author: {book.author.name}</p>
      <p>Start Date: {book.start_date}</p>
      <p>Finish Date: {book.finish_date}</p>
      <p>Description:<br></br> {book.description}</p>
    </div>

  <Link to={'/table'} >Back</Link>
  </>
  );
};


export default BookPage;
