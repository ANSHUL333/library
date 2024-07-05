import React from "react";
import Cards from "./Cards";
import list from "../../src/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            "Step into a world where every book is an adventure waiting to unfold. At Top Reads, your next epic journey begins with the turn of a page
            Unlock the doors to countless adventures and boundless imagination. Here at Top Reads, every book is a new journey, every page a new possibility. Let the stories transport you to fantastical realms, introduce you to unforgettable characters, and ignite your passion for reading. In our library, your next epic adventure is just a page away."

            "Dive in, explore, and discover the magic within every book!
          </p>

          <Link to="/">
            <button className="mt-6 mb-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button><br></br>
          </Link>
        </div>


        <div>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />))
          }
        </div>
      </div>

    </>
  );
}

export default Course;

