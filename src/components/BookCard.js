import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="card bg-base-100 shadow">
      <img src={book.image_url} />
      <div className="p-4">
        <h2>{book.title}</h2>
        <Link href={`/books/${book.id}`} className="btn btn-sm mt-2">
          Details
        </Link>
      </div>
    </div>
  );
}