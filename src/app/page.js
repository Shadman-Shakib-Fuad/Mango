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
        {}

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur h-[260px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s" className="w-32 h-32 object-cover rounded-full" />
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold">Elon Musk</h3>
            <p className="text-sm">
              Books have always been the foundation of my learning. From rocket science to artificial intelligence,
              everything I know started with reading. A single book can completely reshape your thinking process.
              When you read deeply, you begin to connect ideas across different fields, and that is where innovation begins.
              Books are not just information—they are fuel for imagination and problem solving.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur h-[260px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepURZt-f112wNUGblzXPMA_2fAGMKHVDZUg&s" className="w-32 h-32 object-cover rounded-full" />
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold">Bill Gates</h3>
            <p className="text-sm">
              Reading is one of the most powerful tools for personal growth. I dedicate a large portion of my time to books
              because they allow me to learn from the smartest minds in history. Books slow you down, forcing you to think deeply,
              analyze, and absorb knowledge in a way that no short content ever can. Continuous reading builds continuous improvement.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur h-[260px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPVz1inrvUXSYx158EdrTujBt7nVQiwBb_g&s" className="w-32 h-32 object-cover rounded-full" />
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold">Albert Einstein</h3>
            <p className="text-sm">
              Imagination is more important than knowledge, and books are the gateway to imagination. When you read,
              you expose your mind to ideas that go beyond your current reality. Books allow you to explore concepts,
              challenge assumptions, and develop creativity that fuels innovation. A curious mind is always a reading mind.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur h-[260px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg" className="w-32 h-32 object-cover rounded-full" />
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold">Emma Watson</h3>
            <p className="text-sm">
              Books create empathy and understanding. Through reading, we step into lives that are not our own,
              experiencing emotions, struggles, and perspectives that broaden our worldview. Books are not just entertainment,
              they are a bridge that connects humanity and builds emotional intelligence in ways nothing else can.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur h-[260px]">
          <img src="https://goinswriter.com/wp-content/uploads/2011/10/steve-jobs.jpg" className="w-32 h-32 object-cover rounded-full" />
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold">Steve Jobs</h3>
            <p className="text-sm">
              Creativity comes from connecting ideas, and books provide those ideas. When you read across different subjects,
              you begin to combine knowledge in unique ways. Innovation happens when information meets imagination.
              Books are one of the most powerful tools to feed your creativity and build something meaningful.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}