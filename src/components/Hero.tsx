export default function Hero() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Plan your dream wedding with ease
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto">
        Discover vendors, manage tasks, and create unforgettable moments — all
        in one place.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Get Started
        </button>

        <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
          View Plans
        </button>
      </div>
    </section>
  );
}
