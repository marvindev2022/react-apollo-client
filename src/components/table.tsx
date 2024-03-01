import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../utils/var";
import { useClient } from "../context/apolloContext";
import RemoveBook from "./remove";
import UpdateBook from "./update";
import IBook from "../DTO/book";

export default function Table() : JSX.Element {
  const { updateRef, removeRef, setSelectedBook } = useClient();
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Books</h1>
      <RemoveBook />
      <UpdateBook />
      <ul>
        {data.books.map((book: IBook) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <nav>
              <button onClick={()=>{
                setSelectedBook(book);
                updateRef.current?.showModal();
              }}>Edit</button>
              <button
                onClick={() => {
                  setSelectedBook(book);
                  removeRef.current?.showModal();
                }}
              >
                Remove
              </button>
            </nav>
          </li>
        ))}
      </ul>
    </div>
  );
}
