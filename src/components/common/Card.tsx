import './Card.css'

type CardProps = {
  title: string;
  subtitle?: string;
  timeframe: string;
  description: string[];
  links?: { label: string; url: string }[];
}

const Card = ({ title, subtitle, timeframe, description, links }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        <p className="timeframe">{timeframe}</p>
      </div>
      <div className="card-body">
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
        {links && links.length > 0 && (
          <div className="card-links">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card