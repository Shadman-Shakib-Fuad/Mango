import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={book.image_url}
          alt={book.title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>

        <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm">
          Details
        </Link>
      </div>
    </div>
  );
}