import Lottie from "react-lottie";

const Card = ({ card }) => {
  const tele = window.Telegram.webApp;

  const { title, animationData, link } = card;
  const cardClickHandler = () => {
    const data = link;
    // tele.answerWebAppQuery(data);
    window.Telegram.WebView.postEvent("web_app_data_send", false, {
      data: data,
    });
    tele.sendData(data);
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
