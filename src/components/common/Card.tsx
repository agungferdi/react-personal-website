import './Card.css';

export type CardProps = {
  title: string;
  subtitle?: string;
  timeframe: string;
  description: string[];
  image?: string;
  badge?: string;
}

const Card = ({ 
  title, 
  subtitle, 
  timeframe, 
  description, 
  image,
  badge
}: CardProps) => {
  return (
    <div className="card-component" data-badge={badge}>
      {image && (
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
        <div className="card-timeframe">{timeframe}</div>
        <ul className="card-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;