import "./css/item.css";

const Item = (props) => {
  // check if mode is hamburger and create different item accordingly
  {
    return props.hamburger ? (
      <div className="hamburgerItemContainer" onClick={props.handleClick}>
        <a className={`${props.color} hamburgerItem`} href={props.link}>
          {props.title}
        </a>
      </div>
    ) : (
      <a className={`${props.color}`} href={props.link}>
        {props.title}
      </a>
    );
  }
};

export default Item;
