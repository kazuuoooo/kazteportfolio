import { useState } from "react";
import Head from "next/head";
import deved from "../public/deadmeat/web0.jpg";
import Image from "next/image";
import web1 from "../public/deadmeat/web1.mp4";
import web2 from "../public/deadmeat/web2.jpg";
import web3 from "../public/deadmeat/web3.jpg";

export default function DeadMeat(props) {
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
              DEAD MEAT
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Mobile FPS Zombie Survival Game
            </h3>

            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              110,000 Users on Google Play
            </h3>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            Dead Meat is an immersive and intense first-person shooter mobile game that features an endless zombie survival mode. This game is available on Google Play and has been enjoyed by over 110,000 users. The game boasts impressive 3D graphics that transport players to a post-apocalyptic world where they must fight to survive against hordes of undead enemies. Players can choose from a variety of weapons, including rifles, shotguns, and handguns, and must strategically use their limited resources to stay alive as long as possible.
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
            My love for Call of Duty Zombies as a child was the main inspiration for Dead Meat. I was always drawn to the intense and strategic gameplay of fighting off waves of zombies, and I wanted to create a game that captured that same feeling of intensity and challenge. I also drew inspiration from other survival games that I had played, as I wanted to create a game that was immersive and allowed players to fully immerse themselves in the post-apocalyptic world. The result was Dead Meat, a game that combines the best of FPS and zombie survival genres into one intense and exciting experience, and I'm proud to say that it has been enjoyed by over 110,000 players.
          </p>
          <div className="basis-1/3 flex-1 ">
            <div className="image-container">
              <video
                className="rounded-lg my-video"
                autoPlay
                src={web1}
                muted
                loop
                playsInline
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
            As a solo developer of a mobile game like Dead Meat, I have had to focus on optimization and mobile-specific challenges such as touchscreen controls, limited processing power, and smaller screen sizes. This required careful attention to detail in areas such as performance optimization, user interface design, and compatibility testing. I also needed to balance gameplay mechanics and monetization while providing an enjoyable and fair experience for players. Through the use of A/B testing, I was able to gather data to fine-tune the game's difficulty, monetization strategy, and overall user experience. Despite these challenges, my commitment to creating a high-quality game has resulted in over 110,000 players enjoying Dead Meat.
          </p>
          <ul className="list-disc text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              Key Skills
            </span>
            <br></br>
            <br></br>
            <li>Expertise in Unity game engine for 3D game development and optimization on mobile devices</li>
            <li>Advanced programming skills in C# language for efficient code and bug fixing</li>
            <li>Proficiency in Unity test framework and debugging tools for rigorous testing and bug fixing</li>
            <li>Experience in performance profiling and optimization for smooth and fast gameplay</li>
            <li>Experience in mobile game development, including UI/UX design and mobile-specific optimizations</li>
            <li>Proficiency in implementing analytics tools and data-driven decision making for A/B testing and game optimization</li>
            <li>Extensive experience in game optimization, including memory optimization and code refactoring for performance improvement</li>
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
