import React from 'react';

interface Step {
  num: string
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
    desc: "Ask anytime -- it totals everything since you started.",
    example: ["/balance → Balance: ₦18,500"],
  },
]

const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-2 mt-7">
      <h2 className="font-fraunces text-3xl">Three messages, and you are set</h2>
      <p className="font-poppins text-sm">Everything happens inside a Telegram chat you already have open.</p>

      <table>
        <tbody>
          {steps.map((step) => (
            <tr key={step.num} className="border-t border-rule border-[]">
              <td className="font-mono text-sm">{step.num}</td>
              <td>
                <h3 className="font-poppins">{step.title}</h3>
                <p className="font-poppins text-sm">{step.desc}</p>
              </td>
              <td className="font-mono text-sm">{step.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HowItWorks;