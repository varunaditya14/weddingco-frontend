export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">WeddingCo</div>

        <nav className="flex gap-6 text-sm">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 transition">
          Book Now
        </button>
      </div>
    </header>
  );
}
