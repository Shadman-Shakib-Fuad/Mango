import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="card bg-base-100 shadow hover:shadow-xl hover:-translate-y-1 transition">

      <figure>
        <img src={book.image_url} className="h-60 object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>

        <Link href={`/books/${book.id}`}>
          <button className="btn btn-primary btn-sm mt-2">
            View Details
          </button>
        </Link>
      </div>

    </div>
  );
}