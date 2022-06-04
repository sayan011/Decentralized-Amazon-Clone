import React from "react";
import { AmazonContext } from "../context/AmazonContext";
import Card from "./Card";

const Cards = () => {
  const styles = {
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center  flex-wrap gap-[80px]`,
  };
  const item = {
    id: 0,
    attributes: {
      name: "mrpw",
      price: "2",
      src: "https://cdn.dribbble.com/users/6620596/screenshots/14792345/media/af61fa935b055891cb800a9e41ebb747.gif",
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        <Card key={item.id} item={item.attributes} />
      </div>
    </div>
  );
};

export default Cards;
