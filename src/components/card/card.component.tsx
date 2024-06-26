import { Monster } from '../../App';
import './card.styles.css';

type CardProps = {
  monster: Monster
}

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img src={`https://www.robohash.org/${id}`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
