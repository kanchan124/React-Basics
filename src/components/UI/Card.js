import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  //props.children is used as wrapper 
  return <div className={classes}>{props.children}</div>;
}

export default Card;
