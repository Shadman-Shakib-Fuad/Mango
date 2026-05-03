"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import booksData from "../../../data/books.json";

export default function BookDetails() {

  const params = useParams();
  const id = params.id;

  const [books, setBooks] = useState(booksData);

  const book = books.find(b => b.id === id);

  if (!book) return <h1 className="p-10 text-red-500">Book Not Found</h1>;

  const handleBorrow = () => {
    if (book.available_quantity > 0) {

      const updated = books.map(b =>
        b.id === id
          ? { ...b, available_quantity: b.available_quantity - 1 }
          : b
      );

      setBooks(updated);

      const prev = JSON.parse(localStorage.getItem("borrowed")) || [];
      localStorage.setItem("borrowed", JSON.stringify([...prev, book]));

      alert("Borrowed!");
    }
  };

  return (
    <div className="p-10 grid md:grid-cols-2 gap-6">

      <img src={book.image_url} className="rounded" />

      <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p>{book.author}</p>

        <p className="text-primary font-bold mt-2">
          {book.available_quantity} copies left
        </p>

        <button onClick={handleBorrow} className="btn btn-success mt-4">
          Borrow
        </button>
      </div>

    </div>
  );
}