const Section = (props) => {
  return (
    <div>
      <li className="category">
        <h2>{props.category}</h2>

        <div className="carousel">
          {props.images.map((elem, index) => {
            return <img key={index} src={elem} alt="" />;
          })}
        </div>
      </li>
    </div>
  );
};

export default Section;
