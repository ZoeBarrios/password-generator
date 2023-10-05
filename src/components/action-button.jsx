export default function ActionButton({ handleClick, icon, className }) {
  return (
    <button onClick={handleClick} className="button">
      <img src={icon} className={className} />
    </button>
  );
}
