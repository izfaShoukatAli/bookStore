import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div>
      <div className="max-w-screen-2xl  container mx-aut0 md:px-20 px-4 ">
        <div className="mt-28 items-end justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            we're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nulla
            et quos sequi aliquid? Minima ratione quam, fuga vero numquam
            recusandae sequi delectus cum eveniet harum sit? Blanditiis,
            exercitationem odio? Minima ratione quam, fuga vero numquam et quos
            sequi aliquid? Minima ratione quam, fuga vero numquam recusandae
            sequi delectus cum eveniet harum sit?
          </p>
          <Link to="/">
            <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-12">
          {book.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
