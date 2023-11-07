import { useEffect, useRef, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Typewriter } from "react-simple-typewriter";
import slider1 from "../../assets/images/coffe.png";
import slider2 from "../../assets/images/coldDrinks.png";
import slider3 from "../../assets/images/juice.png";

let count = 0;
let slideInterval;

const Banner = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const sliderRef = useRef();

  const removeAnimation = () => {
    sliderRef.current.remove("fade-anim");
  };

  useEffect(() => {
    sliderRef.current.addEventListener("animationend", removeAnimation);
    sliderRef.current.addEventListener("mouseenter", pauseSlider);
    sliderRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % allImg.length;
    setCurrentImg(count);
  };
  const handleOnPreviousClick = () => {
    const productsLength = allImg.length;
    count = (currentImg + productsLength - 1) % productsLength;
    setCurrentImg(count);
    sliderRef.current.classList.add("fade-anim");
  };

  const allImg = [`${slider1}`, `${slider2}`, `${slider3}`];

  return (
    <>
      <div className="mt-4 relative">
        <div
          ref={sliderRef}
          className="w-full select-none relative pt-12 md:py-12 "
        >
          <div className="aspect-w-16 h-[230px]  md:h-screen ">
            <img
              src={allImg[currentImg]}
              alt=""
              className="w-full h-screen object-cover"
            />
          </div>
          <div className="absolute bg-black/50 h-screen w-full bottom-1/4 md:top-1/2 transform -translate-y-1/2 px-0.5 md:px-5 flex justify-between items-center">
            <button onClick={handleOnPreviousClick} className="">
              <FcPrevious className="bg-white/20 hover:bg-white/30 p-1 md:p-3 text-orange-500 text-3xl md:text-5xl rounded-full" />
            </button>
            <button onClick={handleOnNextClick}>
              <FcNext className="bg-white/20 hover:bg-white/30 text-orange-500 p-1 md:p-3 text-3xl md:text-5xl rounded-full" />
            </button>
          </div>
        </div>
        <div className="absolute text-white top-1/4 left-1/3">
          <div className="px-2 mx-auto w-[700px]">
            <div className="form-control my-6">
              <div className="input-group justify-center items-center">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered text-white w-full"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className=" w-full text-center space-y-8">
              <h1 className="text-6xl m-0 font-bold">
              Our services {" "}
                <span className="text-darkBrown text-7xl font-bold">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["Tea", "Soups", "Juice", "Coffee!"]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p
                className="max-w-2xl
              "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias porro ut velit molestiae temporibus iure vero eius
                enim accusamus, iste et, quia optio blanditiis voluptas itaque
                voluptate voluptatem quibusdam repellat!
              </p>
              <button className="btn bg-darkBrown hover:bg-darkBrownHover border-none">
                Book a table
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
