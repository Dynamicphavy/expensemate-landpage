import SectionHead from "@/components/SectionHead";

interface Step {
  num: string;
  title: string;
  desc: string;
  example: string[];
}

const steps: Step[] = [
  {
    num: "01",
    title: "Say what happened",
    desc: "Tell it what you spent or earned, in one line.",
    example: ["/expense 1500 food"],
  },
  {
    num: "02",
    title: "Get instant confirmation",
    desc: "It replies right away with what was saved, so you know it took.",
    example: ["✅ Expense recorded", "Amount: ₦1,500 · Category: Food"],
  },
  {
    num: "03",
    title: "Check where you stand",
    desc: "Ask anytime — it totals everything since you started.",
    example: ["/balance → Balance: ₦18,500"],
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-3 pb-14 md:pb-22">
      <SectionHead title="Three messages, and you're set">
        Everything happens inside a Telegram chat you already have open.
      </SectionHead>

      <div className="border-t border-rule">
        {steps.map((step) => (
          <div
            key={step.num}
            className="grid items-start gap-2 border-b border-rule py-[26px] md:grid-cols-[48px_1fr_1.3fr] md:gap-6"
          >
            <div className="font-mono text-[14px] text-gold md:pt-0.5">
              {step.num}
            </div>

            <div>
              <h3 className="text-[1.05rem] font-semibold">{step.title}</h3>
              <p className="mt-1.5 leading-[1.55] text-ink-soft">{step.desc}</p>
            </div>

            <code className="block rounded border border-rule bg-card px-3 py-2.5 font-mono text-[12.5px] text-code">
              {step.example.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </code>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
