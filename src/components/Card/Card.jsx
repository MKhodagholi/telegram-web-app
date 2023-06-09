import Lottie from "react-lottie";

const Card = ({ card }) => {
  const { title, animationData, link } = card;
  const cardClickHandler = () => {
    console.log(link);
    console.log("hello");
    const data = link;
    window.Telegram.WebApp.sendData(data);
    window.Telegram.WebApp.notificationOccurred('error');
    // console.log(window.Telegram.WebApp.notificationOccurred());
    window.Telegram.WebApp.close();
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
    <div className="flex flex-col justify-center items-center rounded-md font-yekan text-xs text-secondaryColor break-keep whitespace-nowrap">
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
