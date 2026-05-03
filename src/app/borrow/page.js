"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Borrow() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("borrowed")) || [];
    setBooks(data);
  }, []);

  const handleClear = () => {
    localStorage.removeItem("borrowed");
    setBooks([]);
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        My Borrowed Books
      </h1>

      {}
      <div className="grid md:grid-cols-3 gap-6">
        {books.map((b, i) => (
          <div key={i} className="card bg-base-100 shadow">
            <img src={b.image_url} className="h-40 object-cover" />

            <div className="p-4">
              <h2 className="font-bold">{b.title}</h2>
              <p>{b.author}</p>
            </div>
          </div>
        ))}
      </div>

      {}
      {books.length === 0 && (
        <p className="mt-6 text-gray-400">
          No books borrowed yet.
        </p>
      )}

      {}
      <div className="mt-10 flex gap-4">

        <button onClick={handleClear} className="btn btn-error">
          Return All Books
        </button>

        <Link href="/books">
          <button className="btn btn-primary">
            Browse More Books
          </button>
        </Link>

      </div>

    </div>
  );
}