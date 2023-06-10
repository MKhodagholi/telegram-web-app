import Lottie from "react-lottie";

const Card = ({ card }) => {
  const tele = window.Telegram.WebApp;

  const { title, animationData, link } = card;
  const cardClickHandler = () => {
    const data = link;
    window.Telegram.WebView.postEvent("web_app_data_send", false, { data });

    console.log("its happend");
    if (tele.sendData) tele.sendData(JSON.stringify({ data }));
    tele.close();
  };

  window.Telegram.WebView.onEvent("main_button_pressed", cardClickHandler);

  const cardTouchHandler = () => {
    console.log("its happend");
    tele.close();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: typeof animationData !== "string" ? animationData : null,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-md font-yekan text-xs text-textColor break-keep whitespace-nowrap">
      <div
        className="w-[50px] h-[50px] mb-2 cursor-pointer"
        onClick={cardClickHandler}
        onTouchStart={cardTouchHandler}
      >
        {typeof animationData !== "string" ? (
          <Lottie options={defaultOptions} />
        ) : null}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Card;
