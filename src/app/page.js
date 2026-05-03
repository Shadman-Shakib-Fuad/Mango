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
              it can even inspire you to build a new one. Reading expands imagination beyond limits and gives you
              the ability to think differently than others.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Meeting_with_Bill_Gates_-_Nov._8%2C_2019_%2849054512147%29_%28cropped%29.jpg?utm_source=en.wikiquote.org&utm_campaign=index&utm_content=original" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Bill Gates</h3>
            <p>
              Reading is one of the most powerful tools for personal growth. I read about 50 books a year because
              it allows me to learn from the smartest minds in the world. Books help you slow down, think deeply,
              and understand complex ideas in a simple way. They are a gateway to continuous learning.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://hips.hearstapps.com/hmg-prod/images/albert-einstein-sticks-out-his-tongue-when-asked-by-news-photo-1681316749.jpg?crop=1.00xw:0.956xh;0,0.0437xh&resize=980:*" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Albert Einstein</h3>
            <p>
              Books fuel imagination, and imagination is more important than knowledge. Knowledge is limited,
              but imagination encircles the world. When you read, you open your mind to new possibilities,
              ideas, and perspectives that shape innovation and creativity.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Emma Watson</h3>
            <p>
              Books create empathy and understanding. Through stories, we experience lives that are not our own.
              Reading helps us grow emotionally and intellectually. It is not just entertainment—it is a way
              to connect with humanity on a deeper level.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 p-6 rounded-xl backdrop-blur">
          <img src="https://goinswriter.com/wp-content/uploads/2011/10/steve-jobs.jpg" className="w-32 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Steve Jobs</h3>
            <p>
              Creativity comes from connecting ideas, and books are the best way to gather those ideas.
              Reading allows you to explore different disciplines and combine them into something unique.
              Innovation is born when knowledge from books meets imagination.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}