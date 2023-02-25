import { useState } from "react";
import Head from "next/head";
import deved from "../public/animalroll/web0.jpg";
import Image from "next/image";
import web1 from "../public/animalroll/web1.mp4";
import web2 from "../public/animalroll/web2.jpg";
import web3 from "../public/animalroll/web3.jpg";

export default function AnimalRoll(props) {
  const renderImage = (image) => {
    return (
      <div className="basis-1/3 flex-1 ">
        <div className="image-container">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"75%"}
            layout="responsive"
            src={image.src}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={props.darkMode ? "dark" : ""}>
      <section className="">
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-2">
            <Image
              className="rounded-lg object-cover"
              width={"50%"}
              height={"50%"}
              layout="responsive"
              src={deved.src}
            />
          </div>
          <div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Animal Roll
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              2D RPG Pixel Art Adventure
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
              Welcome to my portfolio! I started making games at the age of 12
              and have been passionate about{" "}
              <span className="text-teal-500">
                {" "}
                bringing the worlds of my imagination to reality{" "}
              </span>{" "}
              ever since. All programming and art was done entirely by me. Thank
              you for visiting, and I hope you enjoy exploring my games as much
              as I enjoyed creating them.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              {" "}
              Inspiration
            </span>
            <br></br>
            <br></br>
            Welcome to my portfolio! I started making games at the age of 12 and
            have been passionate about{" "}
            <span className="text-teal-500">
              {" "}
              bringing the worlds of my imagination to reality{" "}
            </span>{" "}
            ever since. All programming and art was done entirely by me. Thank
            you for visiting, and I hope you enjoy exploring my games as much as
            I enjoyed creating them.
          </p>
          <div className="basis-1/3 flex-1 ">
            <div className="image-container">
              <video
                className="rounded-lg my-video"
                autoPlay
                src={web1}
                muted
                loop
              />
            </div>
          </div>

          {renderImage(web2)}

          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              {" "}
              Challenges and Solution
            </span>
            <br></br>
            <br></br>
            Welcome to my portfolio! I started making games at the age of 12 and
            have been passionate about{" "}
            <span className="text-teal-500">
              {" "}
              bringing the worlds of my imagination to reality{" "}
            </span>{" "}
            ever since. All programming and art was done entirely by me. Thank
            you for visiting, and I hope you enjoy exploring my games as much as
            I enjoyed creating them.
          </p>

          <ul className="list-disc text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              Key Skills
            </span>
            <br></br>
            <br></br>
            <li>
              Welcome to my portfolio! I started making games Welcome to my
              portfolio! I started making games Welcome to my portfolio! I
              started making games
            </li>
            <li>Welcome to my portfolio! I started making games </li>
            <li>Welcome to my portfolio! I started making games </li>
          </ul>
          {renderImage(web3)}

          <div className="basis-1/3 flex-1 ">
            <h3 className="text-3xl py-1 dark:text-white ">Gameplay</h3>
            <br></br>
            <div className="image-container">
              <video className="rounded-lg" src={web1} muted controls />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
