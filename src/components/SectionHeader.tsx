type SectionHeaderProps = {
  eyebrow: string;
  description: string;
};

function SectionHeader({
  eyebrow,
  description,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        <h2>{eyebrow}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
