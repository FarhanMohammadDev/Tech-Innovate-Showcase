"use client"
import Lottie from "lottie-react";
import Entrance from '../lottie/LottieLego.json'
export default function Home() {
  return (
    <>
    <Lottie animationData={Entrance}/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  );
}
