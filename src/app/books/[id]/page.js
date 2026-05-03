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


  const publishYear = 2000 + Math.floor(Math.random() * 24);
  const rating = (3 + Math.random() * 2).toFixed(1); // 3.0 - 5.0
  const pages = 150 + Math.floor(Math.random() * 400);
  const language = ["English", "Spanish", "French"][Math.floor(Math.random() * 3)];
  const publisher = ["Penguin", "HarperCollins", "Oxford"][Math.floor(Math.random() * 3)];

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

      alert("Book Borrowed!");
    } else {
      alert("No copies left!");
    }
  };

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">

      {}
      <div>
        <img
          src={book.image_url}
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      {}
      <div>

        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
        <p className="text-lg text-gray-300 mb-4">by {book.author}</p>

        <p className="mb-6">{book.description}</p>

        {}
        <div className="bg-white/10 p-5 rounded-xl space-y-2 backdrop-blur">

          <p>📅 <span className="font-semibold">Published:</span> {publishYear}</p>
          <p>⭐ <span className="font-semibold">Rating:</span> {rating} / 5</p>
          <p>📖 <span className="font-semibold">Pages:</span> {pages}</p>
          <p>🌍 <span className="font-semibold">Language:</span> {language}</p>
          <p>🏢 <span className="font-semibold">Publisher:</span> {publisher}</p>
          <p>📦 <span className="font-semibold">Available:</span> {book.available_quantity} copies</p>

        </div>

        {}
        <button
          onClick={handleBorrow}
          className="btn btn-success mt-6"
        >
          Borrow This Book
        </button>

      </div>

    </div>
  );
}