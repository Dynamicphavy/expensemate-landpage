import Receipt from "./Receipt";

const TELEGRAM_URL = "https://web.telegram.org/a/#8709992201";

const Hero = () => {
  return (
    <header className="grid items-center gap-12 py-10 pb-14 md:grid-cols-[1.1fr_1fr] md:pt-16 md:pb-22">
      <div>
        <h1 className="rise mb-[22px] max-w-[15ch] font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08] font-medium tracking-[-0.01em]">
          Track money the way you already talk about it.
        </h1>

        <p
          style={{ animationDelay: "0.08s" }}
          className="rise mb-[30px] max-w-[42ch] text-[1.08rem] leading-[1.6] text-ink-soft"
        >
          No app to download, no spreadsheet to maintain. Just message a bot the
          way you&apos;d text a friend — ExpenseMate logs it and keeps your
          balance one command away.
        </p>

        <div
          style={{ animationDelay: "0.16s" }}
          className="rise flex flex-wrap items-center gap-[14px]"
        >
          <a
            href={TELEGRAM_URL}
            rel="noopener"
            className="inline-block rounded-[3px] bg-ledger px-[22px] py-[13px] font-mono text-[14px] text-white no-underline transition-colors duration-150 hover:bg-ledger-deep"
          >
            Start on Telegram →
          </a>
        </div>
      </div>

      <Receipt />
    </header>
  );
};

export default Hero;
