const Card = ({ text }) => {
  const cardClickHandler = () => {
    const data = text;
    window.Telegram.WebApp.sendData(data);
    window.Telegram.WebApp.close();
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "10px 20px",
        margin: "0 5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={cardClickHandler}>
        Animation
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
