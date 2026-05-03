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
        <h2 className="text-3xl font-bold text-center mb-6">
          Famous Readers & Writers
        </h2>

        <div className="space-y-10">

          {}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              className="w-60 rounded"
            />
            <p>
              Elon Musk often emphasizes the importance of reading books in his life.
              He learned rocket science by reading books and applying knowledge.
              Books shaped his thinking and innovation journey. He believes that
              continuous learning through reading is the key to success.
            </p>
          </div>

          {}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              className="w-60 rounded"
            />
            <p>
              Emma Watson is known for her love of literature and books.
              She started a global feminist book club and encourages people
              to read more. Books helped her grow intellectually and emotionally.
            </p>
          </div>

          {}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              className="w-60 rounded"
            />
            <p>
              Bill Gates reads around 50 books every year. He shares book
              recommendations and believes reading helps expand thinking,
              improve focus, and develop ideas that can change the world.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}