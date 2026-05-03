"use client";

import { useState } from "react";
import booksData from "../../data/books.json";
import BookCard from "../../components/BookCard";

export default function Books() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = booksData.filter(book => {
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || book.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6 grid md:grid-cols-4 gap-6">

      {}
      <div className="space-y-4">

        <input
          type="text"
          placeholder="Search books..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setCategory("All")} className="btn w-full">All</button>
        <button onClick={() => setCategory("Story")} className="btn w-full">Story</button>
        <button onClick={() => setCategory("Tech")} className="btn w-full">Tech</button>
        <button onClick={() => setCategory("Science")} className="btn w-full">Science</button>

      </div>

      {}
      <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}