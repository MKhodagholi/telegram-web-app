import React from "react";
import CardList from "./components/CardList/CardList";

import bestPlayer from "./assets/animation/best_players.json";
import business from "./assets/animation/business.json";
import customerService from "./assets/animation/customer_service.json";
import diamondManage from "./assets/animation/diamond_management.json";
import faq from "./assets/animation/faq.json";
import groupManagement from "./assets/animation/group_management.json";
import groupReport from "./assets/animation/group_report.json";
import inviteLink from "./assets/animation/invite_link.json";
import joinGame from "./assets/animation/join_game.json";
import learning from "./assets/animation/learning.json";
import nextGame from "./assets/animation/next_game.json";
import payment from "./assets/animation/payment.json";
import phoneNumber from "./assets/animation/phone_number.json";
import profile from "./assets/animation/profile.json";
import quitGame from "./assets/animation/quit_game.json";
import rules from "./assets/animation/rules.json";
import transferAccount from "./assets/animation/transfer_account.json";

import jsonData from "./data/menu_info.json";

function App() {
  window.Telegram.WebApp.ready();
  // window.Telegram.WebApp.MainButton.setText("انتخاب کنید")
  //   .show()
  //   .onClick(function () {
  //     const data = "hello";
  //   });

  const animationArray = [
    inviteLink,
    quitGame,
    "changeName",
    learning,
    bestPlayer,
    groupManagement,
    profile,
    payment,
    diamondManage,
    customerService,
    business,
    transferAccount,
    phoneNumber,
    "event",
    joinGame,
    nextGame,
    groupReport,
    faq,
    "changeGender",
    rules,
    "statsgroup",
  ];

  console.log(jsonData);

  const cardArray =
    Object.keys(jsonData).length > 0
      ? Object.keys(jsonData)?.map((itemNumber, index) => {
          const item = jsonData[itemNumber];
          const object = {
            ...item,
            animationData: animationArray[index],
          };
          return object;
        })
      : [];

  console.log(cardArray);

  return (
    <div className="min-h-screen bg-primaryColor p-4">
      <CardList cardArray={cardArray} />
    </div>
  );
}

export default App;
