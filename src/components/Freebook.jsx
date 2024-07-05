import React from 'react';
import list from "../../src/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../src/components/Cards.jsx";


function Freebook() {
  const filterData = list.filter((data) => data.category === "Free Pass");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-2xl md:text-1xl font-bold">Passport To Adventure, Knowledge, and Boundless Imagination </h1><br></br>
          <p>"Welcome to Top Reads, where each book is a portal to a universe of wonder, where the ordinary transforms into the extraordinary, and where every reader becomes a hero of their own story."</p><br></br>
          <p>
            Dive into our labyrinth of literary wonders and embark on a journey through worlds both familiar and fantastical. Whether you're a seeker of spine-tingling thrillers, an aficionado of epic sagas, or a connoisseur of heartwarming tales, your next great adventure awaits between the covers of our digital domain. Join us, fellow voyagers, as we turn the ordinary into the extraordinary and transform reading into an epic experience!

          </p><br></br><br></br>
          <button className="btn mt-2 btn-secondary">Top Picks</button><br></br>
        </div>


        <div>
          <Slider {...settings}>
            {filterData.map((item) =>
            (<Cards item={item} key={item.id} />

            ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
