import books from "../data/books.json";
import BookCard from "../components/BookCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {}
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold">Find Your Next Book</h1>
        <Link href="/books">
          <button className="btn btn-primary mt-6">
            Browse Books
          </button>
        </Link>
      </div>

      {}
      <div className="bg-primary text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee">
          📚 New Arrivals: Atomic Habits | Deep Work | Clean Code | Sapiens | Special Offers Available!
        </div>
      </div>

      {}
      <div className="p-6 grid md:grid-cols-3 gap-6">
        {books.slice(0,6).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {}
      <div className="mt-16 px-6 space-y-16">

        <h2 className="text-4xl font-bold text-center">
          What Great Minds Say About Books
        </h2>

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/250px-Elon_Musk_-_54820081119_%28cropped%29.jpg" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Elon Musk</h3>
            <p>
              Books have always been the foundation of my learning. From rocket science to artificial intelligence,
              everything I know started with reading. A single book can change how you see the world, and sometimes
              it can even inspire you to build a new one.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZVtiDW6ZhvvWgq5SYoD8X2c2LtS5nycvLA&s" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Bill Gates</h3>
            <p>
              Reading is one of the most powerful tools for personal growth. I read dozens of books every year because
              they allow me to learn from the smartest minds in the world.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://i.natgeofe.com/n/6cd66618-52f9-4686-985e-086611d29b10/PM4JD2.jpg" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Albert Einstein</h3>
            <p>
              Imagination is more important than knowledge. Books fuel imagination, opening doors to endless possibilities.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Emma Watson</h3>
            <p>
              Books create empathy and understanding. They allow us to experience lives beyond our own.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://goinswriter.com/wp-content/uploads/2011/10/steve-jobs.jpg" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Steve Jobs</h3>
            <p>
              Creativity comes from connecting ideas. Books provide those ideas and inspire innovation.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}