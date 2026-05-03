"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import booksData from "../../../data/books.json";

export default function BookDetails() {

  const { id } = useParams();
  const [books, setBooks] = useState(booksData);
  const [toast, setToast] = useState("");

  const book = books.find(b => b.id === id);

  if (!book) return <h1 className="p-10">Book Not Found</h1>;

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

      setToast("✅ Book Borrowed!");

      setTimeout(() => setToast(""), 2000);
    }
  };

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">

      {/* TOAST */}
      {toast && (
        <div className="fixed top-24 right-5 bg-green-500 text-white px-4 py-2 rounded shadow">
          {toast}
        </div>
      )}

      <img src={book.image_url} className="rounded-xl" />

      <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p>{book.author}</p>

        <p className="mt-3">{book.description}</p>

        <p className="mt-2 text-primary">
          {book.available_quantity} copies left
        </p>

        <button onClick={handleBorrow} className="btn btn-success mt-5">
          Borrow
        </button>
      </div>

    </div>
  );
}