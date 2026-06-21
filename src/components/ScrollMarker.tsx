type ScrollMarkerProps = {
  number: string;
  label: string;
};

function ScrollMarker({ number, label }: ScrollMarkerProps) {
  return (
    <aside className="scroll-marker">
      <div className="marker-line">
        <span />
      </div>

      <p>{number}</p>
      <span>{label}</span>
    </aside>
  );
}

export default ScrollMarker;