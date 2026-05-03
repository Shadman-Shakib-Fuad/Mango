import books from "../data/books.json";
import BookCard from "../components/BookCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Banner */}
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold">Find Your Next Book</h1>
        <Link href="/books">
          <button className="btn btn-primary mt-6">
            Browse Books
          </button>
        </Link>
      </div>

      {/* MARQUEE */}
      <div className="bg-primary text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee">
          📚 New Arrivals: Atomic Habits | Deep Work | Clean Code | Sapiens | Special Offers Available!
        </div>
      </div>

      {/* Books */}
      <div className="p-6 grid md:grid-cols-3 gap-6">
        {books.slice(0,6).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}