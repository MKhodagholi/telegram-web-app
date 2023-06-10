import Card from "../Card/Card";

const CardList = ({ cardArray }) => {
  return (
    <div className="grid grid-cols-3 gap-4 gap-y-12 p-4 bg-primaryColor rounded-lg">
      {cardArray.length > 0 ? (
        cardArray.map((card, index) => <Card key={index} card={card} />)
      ) : (
        <p>no item found!</p>
      )}
    </div>
  );
};

export default CardList;
