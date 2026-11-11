import React from 'react'

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
    <div>
      <h2>Three messages, and you are set</h2>
      <p>Everything happens inside a Telegram chat you already have open.</p>

      <table>
        <tbody>
          <tr>
            <td>01</td>
            <td>Say what happened</td>
            <td>/expense</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HowItWorks;