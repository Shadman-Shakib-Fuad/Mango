export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {}
        <div>
          <h2 className="text-xl font-bold text-white">📚 Mango Library</h2>
          <p className="mt-2 text-sm">
            Your digital library to explore and borrow amazing books anytime.
          </p>
        </div>

        {}
        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>Home</li>
            <li>All Books</li>
            <li>Borrow</li>
            <li>Profile</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-2 text-sm">Email: support@mango.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
        </div>

      </div>

      <div className="text-center text-sm mt-8 text-gray-500">
        © 2026 Mango Library. All rights reserved.
      </div>

    </footer>
  );
}