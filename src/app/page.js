import books from "../data/books.json";
import BookCard from "../components/BookCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {}
      <div className="hero bg-base-200 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Find Your Next Read</h1>

          <Link href="/books">
            <button className="btn btn-primary mt-4">Browse Now</button>
          </Link>
        </div>
      </div>

      {}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}