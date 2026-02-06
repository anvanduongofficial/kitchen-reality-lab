export default function EmailForm() {
  return (
    <section className="max-w-md mx-auto mt-14">
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <p className="text-xs text-[#8E8E8E] tracking-widest">
          FREE PDF
        </p>

        <h2 className="mt-2 text-[#0B0B0C] text-xl font-semibold">
          Get the complete checklist.
        </h2>

        <p className="mt-2 text-sm text-[#5F5F5F]">
          No spam. No trends.
          <br />
          Just clear cooking logic.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-[#E5E5E5] px-4 py-3 text-sm text-[#0B0B0C] placeholder-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#0B0B0C]"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#0B0B0C] py-3 text-sm font-semibold text-white active:scale-[0.99]"
          >
            SEND ME THE CHECKLIST
          </button>
        </form>
      </div>
    </section>
  );
}
