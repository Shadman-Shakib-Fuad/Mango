import books from "../data/books.json";
import BookCard from "../components/BookCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {}
      <div className="hero bg-base-200 py-16 text-center">
        <div>
          <h1 className="text-5xl font-bold">Find Your Next Read</h1>
          <Link href="/books">
            <button className="btn btn-primary mt-4">Browse Books</button>
          </Link>
        </div>
      </div>

      {}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.slice(0,6).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {}
      <div className="p-10 bg-base-200 mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Famous Readers</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
            <div className="p-4">
              <h3 className="font-bold">Elon Musk</h3>
              <p>Reads science & tech books daily.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
            <div className="p-4">
              <h3 className="font-bold">Emma Watson</h3>
              <p>Book lover & feminist reader.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" />
            <div className="p-4">
              <h3 className="font-bold">Bill Gates</h3>
              <p>Reads 50+ books per year.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}