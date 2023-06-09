import React from "react";
import CardList from "./components/CardList/CardList";

function App() {
  window.Telegram.WebApp.ready();
  // window.Telegram.WebApp.MainButton.setText("انتخاب کنید")
  //   .show()
  //   .onClick(function () {
  //     const data = "hello";
  //   });

  const cardArray = [
    { text: "invite_link" },
    { text: "quit_game" },
    { text: "change_name" },
  ];

  return (
    <div>
      <CardList cardArray={cardArray} />
    </div>
  );
}

export default App;
