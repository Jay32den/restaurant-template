import React from "react";
import img1 from "../assets/images/img11.jpg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Tasty Dish" price="$11.99" />
        <DishesCard img={img2} title="Tasty Dish" price="$12.99" />
        <DishesCard img={img3} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img4} title="Tasty Dish" price="$11.99" />
        <DishesCard img={img5} title="Tasty Dish" price="$10.99" />
        <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
      </div>
    </div>
  );
};

export default Dishes;