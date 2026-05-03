import books from "../data/books.json";
import BookCard from "../components/BookCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Banner */}
      <div className="hero bg-base-200 py-16 text-center">
        <div>
          <h1 className="text-5xl font-bold">Find Your Next Book</h1>
          <Link href="/books">
            <button className="btn btn-primary mt-4">Browse Books</button>
          </Link>
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