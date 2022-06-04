import React from "react";
import { createContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  const [username, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,

    isWeb3enabled,
  } = useMoralis();

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const currentUsername = await user?.get("nickname");
        setUserName(currentUsername);
      }
    })();
  }, [isAuthenticated, user, username]);

  const handlesetUsername = () => {
    if (user) {
      if (nickname) {
        user.set("nickname", nickname);
        user.save();
        setNickname("");
      } else {
        console.log("Can't set empty nickname");
      }
    } else {
      console.log("No User");
    }
  };
  return (
    <AmazonContext.Provider
      value={{
        isAuthenticated,
        nickname,
        setNickname,
        setUserName,
        username,
        handlesetUsername,
      }}
    >
      {children}
    </AmazonContext.Provider>
  );
};
