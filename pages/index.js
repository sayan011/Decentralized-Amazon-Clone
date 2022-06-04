import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

const styles = {
  container: "h-full w-full flex bg-[#fff]",
};
export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Main />
    </div>
  );
}
