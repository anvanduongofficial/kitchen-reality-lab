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
  {
    id: "03",
    title: "Seasoning Too Late",
    description:
      "Salt after cooking seasons the surface. Salt before cooking changes how food behaves.",
  },
];

export default function ChecklistPreview() {
  return (
    <section className="max-w-md mx-auto mt-12 space-y-8">
      {rules.map((rule, id) => (
        <div className="border-l border-[#2A2A2A] pl-4" key={id}>
          <p className="text-xs text-[#8E8E8E] tracking-widest">
            RULE #{rule.id}
          </p>
          <h3 className="mt-1 text-white text-lg font-medium">{rule.title}</h3>
          <p className="mt-1 text-sm text-[#CFCFCF]">
            {rule.description ? rule.description : rule.rule}
          </p>
        </div>
      ))}
    </section>
  );
}
