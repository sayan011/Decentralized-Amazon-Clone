import React from "react";
import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  const [username, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [assets, setAssets] = useState([]);

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis();

  const {
    data: assetsData,
    error: assetsDataerror,
    isLoading: userDataisLoading,
  } = useMoralisQuery("assets");
  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const currentUsername = await user?.get("nickname");
        setUserName(currentUsername);
      }
    })();
  }, [isAuthenticated, user, username]);

  const getAssets = async () => {
    try {
      await enableWeb3();
      setAssets(assetsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async () => {
      if (isWeb3enabled) {
        await getAssets();
      }
    };
  }, [getAssets, isWeb3enabled, assetsData, assetsDataisLoading]);

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
        assets,
      }}
    >
      {children}
    </AmazonContext.Provider>
  );
};
