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
              Isometric Mobile Arcade Game
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            Animal Roll is a thrilling mobile arcade game that I developed. The game is fast-paced and endless, challenging players to keep rolling and avoid obstacles for as long as possible. The objective of the game is to control an animal character as it rolls through a vibrant world filled with obstacles and power-ups. The game features intuitive touch controls that allow players to quickly and easily guide their animal through the terrain. 
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
            I've always been inspired by the simple yet addictive gameplay of Ketchapp games. Their minimalist designs and intuitive controls have been a constant source of inspiration for me, and it's what led me to create Animal Roll. With its fast-paced and endless gameplay, Animal Roll draws inspiration from Ketchapp's successful formula while adding its own unique twist. Just like Ketchapp's games, Animal Roll is easy to pick up and play, but difficult to put down. Its vibrant graphics and addictive gameplay make it a game that players will keep coming back to, just like they do with Ketchapp's games.
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
            One challenge I faced when creating the mobile controls for Animal Roll was finding the right balance between simplicity and functionality. To make the controls easy to understand and use, I opted for a one-touch control system with a swipe mechanic for more depth. I tested the game extensively and added visual and audio feedback to make the controls intuitive and engaging. The end result was a responsive and fun control system that allowed players to fully immerse themselves in the game and enjoy the fast-paced action of Animal Roll.
          </p>

          <ul className="list-disc text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              Key Skills
            </span>
            <br></br>
            <br></br>
            <li>Expertise in Isometric Game Development, with knowledge of isometric game design principles and mechanics, including camera movement, tile-based systems, and perspective illusions.</li>
            <li>Experience with Mobile Game Development, with a focus on mobile user experience and optimization techniques, such as performance optimization, touch input, and screen resolutions to create a smooth and engaging mobile game experience.</li>
            <li>Familiarity with Unity Editor, with the ability to use Unity editor's interface and tools to prototype, test, and iterate on game mechanics, user experience, and controls.</li>
            <li>User Experience Design, with a focus on creating engaging, easy-to-understand, and intuitive interfaces and gameplay mechanics that keep players coming back for more.</li>
            <li>Creative Problem-Solving Skills, with a passion for problem-solving and creative thinking to overcome technical challenges and find innovative solutions that enhance gameplay, controls, and user experience.</li>
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
