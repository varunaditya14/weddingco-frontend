export default function Features() {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-semibold text-center text-gray-900">
        Why WeddingCo?
      </h2>

      <p className="text-center text-gray-500">
        Everything you need to plan beautifully — in one place.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border p-6 shadow-sm space-y-2">
          <h3 className="font-semibold text-gray-900">Find Top Vendors</h3>
          <p className="text-gray-500 text-sm">
            Browse photographers, venues, makeup artists — all verified.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm space-y-2">
          <h3 className="font-semibold text-gray-900">Smart Checklist</h3>
          <p className="text-gray-500 text-sm">
            Track tasks with deadlines so nothing is missed.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm space-y-2">
          <h3 className="font-semibold text-gray-900">Budget Planner</h3>
          <p className="text-gray-500 text-sm">
            Plan expenses and stay within your budget easily.
          </p>
        </div>
      </div>
    </section>
  );
}
