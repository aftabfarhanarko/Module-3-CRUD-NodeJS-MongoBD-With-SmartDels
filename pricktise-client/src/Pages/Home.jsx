import React, { Suspense } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const promiseData = fetch("https://pricktise-server.vercel.app/limet_producat").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div>
      <section className="w-full">
        <Hero></Hero>
      </section>
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl text-center my-6 font-bold ">
          Recent <span className="text-purple-500">Cook Producat</span>
        </h1>
        <Suspense fallback={<h1>Loding.........</h1>}>
          <Card promiseData={promiseData}></Card>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
