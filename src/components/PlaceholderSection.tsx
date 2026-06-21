import ScrollMarker from "./ScrollMarker";

type PlaceholderSectionProps = {
  id: string;
  number: string;
  title: string;
  description: string;
};

function PlaceholderSection({
  id,
  number,
  title,
  description,
}: PlaceholderSectionProps) {
  return (
    <section id={id} className="placeholder-section">
      <ScrollMarker number={number} label={title} />

      <div className="placeholder-card">
        <span className="section-kicker">Coming Next</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default PlaceholderSection;