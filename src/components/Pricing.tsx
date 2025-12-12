export default function Pricing() {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-semibold text-center text-gray-900">
        Pricing Plans
      </h2>

      <p className="text-center text-gray-500">
        Choose what fits your wedding journey.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-8 shadow-sm space-y-4">
          <h3 className="text-lg font-semibold">Basic</h3>
          <p className="text-3xl font-bold">₹4,999</p>
          <ul className="text-gray-500 space-y-1">
            <li>• Vendor search</li>
            <li>• Checklist</li>
          </ul>
        </div>

        <div className="rounded-xl border p-8 shadow-sm space-y-4">
          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-3xl font-bold">₹9,999</p>
          <ul className="text-gray-500 space-y-1">
            <li>• Everything in Basic</li>
            <li>• Budget planner</li>
            <li>• Priority support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
