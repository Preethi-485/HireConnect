import './Card.css'; // Import the CSS file with the styles

const Card = ({ children, bg = 'card-bg-default' }) => {
  return <div className={`${bg} card-container`}>{children}</div>;
};

export default Card;
