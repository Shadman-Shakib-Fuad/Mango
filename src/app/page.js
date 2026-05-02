import books from "../data/books.json";
import BookCard from "../components/BookCard";

export default function Home() {
  return (
    <div>
      {}
      <div className="hero bg-base-200 p-10">
        <div>
          <h1 className="text-5xl font-bold">Find Your Next Read</h1>
          <button className="btn mt-4">Browse Now</button>
        </div>
      </div>

      {}
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.slice(0,4).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}