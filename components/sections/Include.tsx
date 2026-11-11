import React from 'react';

interface Included {
  point: string;
  desc: string;
}

const includes: Included[] = [
  {
    point: "Natural commands",
    desc: "No menus to learn -- just /expense, /income, and /balance",
  },
  {
    point: "Private by user",
    desc: "Every balance is tied to your own Telegram account, kept separate from everyone else's",
  },
  {
    point: "Cloud-synced",
    desc: "Your history lives in the cloud, not on one device",
  },
  {
    point: "Always on",
    desc: "Runs continuously, so it's ready whenever you are",
  },
]

const Include = () => {
  return (
    <div className="mt-7">
      <h2>What's Included</h2>
      <p>ExpenseMate is small on purpose -- it does a few things and does them reliably.</p>
      
      <table>
        <tbody>
          {includes.map((include, index) => (
            <tr key={index} className="border-t border-rule border-[]">
              <td>{include.point}</td>
              <td className="font-mono text-sm">{include.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Include;