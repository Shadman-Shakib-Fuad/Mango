import books from "../../data/books.json";
import BookCard from "../../components/BookCard";

export default function Books() {
  return (
    <div className="p-6 grid md:grid-cols-4 gap-6">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}