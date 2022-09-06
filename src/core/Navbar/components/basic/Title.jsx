import "./css/title.css";

const Title = (props) => {
  return (
    <div className="titleContainer">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
