export default function Footer() {
  return (
    <footer className="bg-base-200 mt-10 p-10 text-center">

      <h2 className="text-xl font-bold text-primary">🍋 Mango Library</h2>

      <p className="mt-2">
        Your digital reading partner 📚
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <a className="hover:text-primary transition">Facebook</a>
        <a className="hover:text-primary transition">Twitter</a>
        <a className="hover:text-primary transition">Instagram</a>
      </div>

      <p className="mt-4 text-sm">
        © 2026 Mango Library. All rights reserved.
      </p>

    </footer>
  );
}