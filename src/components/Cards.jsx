import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div>
        <div className=" mt-2 card card-side bg-base-100 shadow-xl cursor-pointer px-1 py-0 hover:bg-pink-500 hover:scale-105 duration-200">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <div className="badge badge-secondary">{item.category}</div><br></br>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className=" cursor-pointer px-1 py-0 rounded-full hover:bg-green-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div><br></br>
    </>
  );
}

export default Cards;
