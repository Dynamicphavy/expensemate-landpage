const SectionHead = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-10 max-w-[46ch]">
      <h2 className="mb-[10px] font-display text-[clamp(1.6rem,3vw,2.1rem)] font-medium">
        {title}
      </h2>
      <p className="leading-[1.6] text-ink-soft">{children}</p>
    </div>
  );
};

export default SectionHead;
