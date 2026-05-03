"use client";

import { useEffect, useState } from "react";

export default function Borrow() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("borrowed")) || [];
    setBooks(data);
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        My Borrowed Books
      </h1>

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

    </div>
  );
}