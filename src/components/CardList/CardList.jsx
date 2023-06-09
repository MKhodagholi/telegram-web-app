import Card from "../Card/Card";

const CardList = ({ cardArray }) => {
  return (
    <div style={{ display: "flex" }}>
      {cardArray.length > 0 ? (
        cardArray.map((card, index) => <Card key={index} text={card.text} />)
      ) : (
        <p>no item found!</p>
      )}
    </div>
  );
};

export default CardList;
