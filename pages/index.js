import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/SideBar";

const styles = {
  container: "h-full w-full flex bg-[#fff]",
};
export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className="font-extrabold">HEHE</div>
    </div>
  );
}
