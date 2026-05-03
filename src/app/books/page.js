"use client";

import books from "../../data/books.json";
import BookCard from "../../components/BookCard";

export default function Books() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}