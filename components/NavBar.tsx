const TELEGRAM_URL = "https://t.me/ExpenseMateBot";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between pt-7">
      <div className="flex items-center gap-2 font-mono text-[15px] tracking-[0.02em]">
        <span
          aria-hidden="true"
          className="inline-flex size-[22px] shrink-0 items-center justify-center rounded-[4px] bg-ledger text-[12px] text-white"
        >
          🧾
        </span>
        ExpenseMate
      </div>

      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener"
        className="rounded-[3px] border border-rule px-[14px] py-2 font-mono text-[13px] whitespace-nowrap no-underline transition-colors duration-150 hover:border-ledger hover:bg-ledger hover:text-white"
      >
        Open in Telegram
      </a>
    </nav>
  );
};

export default NavBar;
