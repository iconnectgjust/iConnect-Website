import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text-wrapper ${className}`}
      style={{ animationDuration }}
    >
      <span className={`shiny-text ${disabled ? 'disabled' : ''}`}>
        {text}
      </span>
    </div>
  );
};

export default ShinyText;
