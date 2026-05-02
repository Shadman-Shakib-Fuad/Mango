import books from "../../../data/books.json";

export default function BookDetails({ params }) {
  const book = books.find(b => b.id === params.id);

  return (
    <div className="p-10 grid md:grid-cols-2 gap-6">
      <img src={book.image_url} />

      <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <p>{book.available_quantity} copies left</p>

        <button className="btn mt-4">Borrow</button>
      </div>
    </div>
  );
}