import books from "../../../data/books.json";

export default async function BookDetails({ params }) {

  // ✅ FIX 1: params await করতে হবে
  const { id } = await params;

  // ✅ FIX 2: id string ensure কর
  const book = books.find(b => b.id === id);

  // ✅ FIX 3: safety check (important)
  if (!book) {
    return <h1 className="p-10 text-red-500">Book Not Found</h1>;
  }

  return (
    <div className="p-10 grid md:grid-cols-2 gap-6">
      <img src={book.image_url} alt={book.title} />

      <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="mt-2">Author: {book.author}</p>
        <p className="mt-2">{book.description}</p>
        <p className="mt-2">{book.available_quantity} copies left</p>

        <button className="btn mt-4">Borrow</button>
      </div>
    </div>
  );
}