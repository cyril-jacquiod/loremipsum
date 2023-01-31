import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  //   console.log(props.title);
  //   console.log(props.description);
  return (
    <div className="container">
      {/* <h1>{props.title}</h1> */}
      <Title name={props.title} />
      {/* <p>{props.description}</p> */}
      <Description text={props.description} />
    </div>
  );
};

export default Content;
