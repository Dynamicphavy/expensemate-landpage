const DASHED = "border-[rgba(239,234,224,0.25)]";

const Receipt = () => {
  return (
    <div
      role="img"
      aria-label="Example conversation with the ExpenseMate bot"
      style={{ animationDelay: "0.22s" }}
      className="rise w-full max-w-[340px] justify-self-start rounded-lg bg-panel px-[22px] pt-[22px] pb-6 font-mono text-[13px] text-panel-fg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] md:justify-self-end"
    >
      <div
        className={`mb-[14px] flex items-center justify-between border-b border-dashed ${DASHED} pb-3 text-[12px] text-[rgba(239,234,224,0.6)]`}
      >
        <span>expensemate_bot</span>
        <span>chat</span>
      </div>

      <div className="my-[10px] text-[#E8C77E]">/expense 1500 food</div>
      <div className="my-[10px] leading-[1.5] text-[rgba(239,234,224,0.9)]">
        ✅ Expense recorded
        <br />
        Amount: ₦1,500 · Category: Food
      </div>

      <div className="my-[10px] text-[#E8C77E]">/income 20000 allowance</div>
      <div className="my-[10px] leading-[1.5] text-[rgba(239,234,224,0.9)]">
        ✅ Income recorded
        <br />
        Amount: ₦20,000 · Source: Allowance
      </div>

      <hr className={`my-4 border-0 border-t border-dashed ${DASHED}`} />

      <div className="my-[10px] text-[#E8C77E]">/balance</div>
      <div className="flex justify-between pt-1 text-[14px]">
        <span>Total balance</span>
        <span className="text-[#7FC9A4]">₦18,500</span>
      </div>
    </div>
  );
};

export default Receipt;
