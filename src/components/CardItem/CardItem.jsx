import { NavLink } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <NavLink className="cards-item-link" to={props.path}>
          <figure className="cards-item-pic-wrap" data-category={props.label}>
            <img className="cards-item-img" alt="Travel" src={props.src} />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default CardItem;
