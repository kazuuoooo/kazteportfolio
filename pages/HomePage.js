import Head from "next/head";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import { useState } from "react";
import deved from "../public/profilepic.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.mp4";
import web2 from "../public/web2.mp4";
import web3 from "../public/web3.mp4";
import web4 from "../public/web4.mp4";
import web5 from "../public/web5.mp4";
import web6 from "../public/web6.mp4";





export default function HomePage(props) {


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  const images = [
    { src: web1 },
    { src: web2 },
    { src: web3 },
    { src: web4 },
    { src: web5 },
    { src: web6 }
  ];
  
  const titles = ["FABLELAND", "DEAD MEAT", "FISHERMAN'S WHARF", "FPS FUN", "MASTER OF CASTLES", "ANIMAL ROLL"];
  const pageID = ["FABLELAND", "DEADMEAT", "FISHERMAN", "FPSFUN", "MASTEROFCASTLES", "ANIMALROLL"];

  const renderImages = () => {
    return images.map((image, index) => {
      return (
        <div key={index} className="basis-1/3 flex-1 ">
          <div className="image-container">
            <video       
              className="rounded-lg object-cover"
              width={"100%"}
              height={"75%"}
              layout="responsive"
              autoPlay
              muted
              loop
              src={image.src}
              playsInline
            />
            <div className="overlay"></div>
            <div className="title">
              <button onClick={() => props.setPage(pageID[index])}>{titles[index]} </button>
            </div>
          </div>
        </div>
      );
    });
  }


  return (
    <div className={props.darkMode ? "dark" : ""}>
        <section className="">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            <div className="basis-1/3 flex-1">
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-2 md:h-96 md:w-96">
                <Image src={deved} layout="fill" objectFit="cover" />
              </div>
              <div className="text-5xl flex justify-center gap-20 py-2 relative overflow-hidden text-gray-600 dark:text-gray-400">
                <AiFillLinkedin 
                  onClick={() => window.open("https://www.linkedin.com/in/kaz-te/", '_blank', 'noopener')}
                  className=" cursor-pointer text-2xl" />  
                <AiFillYoutube                   
                  onClick={() => window.open("https://www.youtube.com/channel/UCt2tTe3Exuq5HEC_TYCxRLQ", '_blank', 'noopener')}
                  className=" cursor-pointer text-2xl" />
                <AiFillInstagram                   
                  onClick={() => window.open("https://www.instagram.com/kaz.te/", '_blank', 'noopener')}
                  className=" cursor-pointer text-2xl" />
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Kaz Tahara-Edmonds
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Game Developer and Software Engineer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
                Welcome to my portfolio! I started making games 
                at the age of 12 and have been passionate about <span className="text-teal-500"> bringing the worlds
                of my imagination to reality </span> ever since. All programming and art was 
                done entirely by me. Thank you for visiting, and I hope you enjoy 
                exploring 
                my games as much as I enjoyed creating them.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>

          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {renderImages()}
          
          </div>
        </section>
    </div>
  );
}
