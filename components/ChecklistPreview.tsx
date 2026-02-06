const rules = [
  {
    id: "01",
    title: "Trusting Viral Advice",
    rule: "If it looks clever, question it.",
  },
  {
    id: "02",
    title: "Treating Heat as Fixed",
    rule: "Heat is a variable.",
  },
];

export default function ChecklistPreview() {
  return (
    <section className="max-w-md mx-auto mt-12 space-y-8">
      {/* Rule 01 */}
      <div className="border-l border-[#2A2A2A] pl-4">
        <p className="text-xs text-[#8E8E8E] tracking-widest">
          RULE #01
        </p>
        <h3 className="mt-1 text-white text-lg font-medium">
          Trusting Viral Advice
        </h3>
        <p className="mt-1 text-sm text-[#CFCFCF]">
          That “clever” trick you saved?
          That's usually the problem.
        </p>
      </div>

      {/* Rule 02 */}
      <div className="border-l border-[#2A2A2A] pl-4">
        <p className="text-xs text-[#8E8E8E] tracking-widest">
          RULE #02
        </p>
        <h3 className="mt-1 text-white text-lg font-medium">
          Treating Heat as Fixed
        </h3>
        <p className="mt-1 text-sm text-[#CFCFCF]">
          Same pan. Same stove.
          Different outcome — every time.
        </p>
      </div>

      <p className="text-xs text-[#8E8E8E] italic">
        The remaining rules are inside the checklist.
      </p>

      <p className="text-sm text-[#CFCFCF]">
        Recipes tell you what to do.
        <br />
        This explains why things fail.
      </p>
    </section>
  );
}
