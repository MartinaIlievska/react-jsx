import { useState } from "react";
import { BookCard } from "./BookCard";
import "./BookLibrary.css"


const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    available: true,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    available: false,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    available: true,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    available: true,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    available: false,
  },
];

export function BookLibrary() {
  const [filter, setFilter] = useState("all");
  const filterBooks = () => {
    if (filter === "all") {
      return books;
    } else if (filter === "available") {
      return books.filter((book) => book.available);
    } else if (filter === "not available") {
      return books.filter((book) => !book.available);
    }
    return books;
  };
  return (
    <div>
      <h1>My Book Library</h1>
      <button onClick={() => setFilter("all")}>ALL BOOKS</button>
      <button onClick={() => setFilter("available")}>AVAILABLE BOOKS</button>
      <button onClick={() => setFilter("not available")}>
        NOT AVAILABLE BOOKS
      </button>

      <div className="books-div">
        {filterBooks().map((book) => (
          <div key={book.id}>
            <BookCard  book={book} />
            {!book.available && <h4 id="not-available">Not in stock</h4>}
          </div>
        ))}
      </div>
    </div>
  );
}
