import SectionHead from "@/components/SectionHead";

interface Included {
  point: string;
  desc: string;
}

const includes: Included[] = [
  {
    point: "Natural commands",
    desc: "No menus to learn — just /expense, /income, and /balance",
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
];

const Include = () => {
  return (
    <section className="pb-14 md:pb-22">
      <SectionHead title="What's included">
        ExpenseMate is small on purpose — it does a few things and does them
        reliably.
      </SectionHead>

      <div className="rounded-md border border-rule bg-card px-7 py-1.5">
        {includes.map((include) => (
          <div
            key={include.point}
            className="flex flex-wrap items-baseline gap-2.5 border-b border-rule py-5 last:border-b-0 md:flex-nowrap"
          >
            <span className="font-semibold whitespace-nowrap">
              {include.point}
            </span>
            <span
              aria-hidden="true"
              className="hidden h-0 flex-1 -translate-y-[5px] border-b border-dotted border-rule md:block"
            />
            <span className="max-w-full text-[0.95rem] text-ink-soft md:max-w-[34ch] md:text-right">
              {include.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Include;
