"use client";
import { useState } from "react";
import booksData from "../../data/books.json";
import BookCard from "../../components/BookCard";

export default function Books() {
  const [search, setSearch] = useState("");

  const filtered = booksData.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search books..."
        className="input input-bordered w-full mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}