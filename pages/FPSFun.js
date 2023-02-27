import { useState } from "react";
import Head from "next/head";
import deved from "../public/fpsfun/web0.jpg";
import Image from "next/image";
import web1 from "../public/fpsfun/web1.mp4";
import web2 from "../public/fpsfun/web2.jpg";
import web3 from "../public/fpsfun/web3.jpg";

export default function FpsFun(props) {
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
              FPS Fun
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              FPS Game with Active Ragdoll Physics
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            FPS Fun is an action-packed first-person shooter game that lets players experiment with a variety of FPS mechanics while causing chaos and destruction. Featuring active ragdoll enemies that react realistically to player actions, players can explore destructible environments and face unique challenges across multiple levels. With the added element of parkour, players can run, jump, and climb their way through levels with ease, making for fast-paced and exhilarating gameplay. Overall, FPS Fun is a thrilling game that offers hours of entertaining gameplay.
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
            As a game developer, I was inspired by the Max Payne video game series for its gritty storytelling and innovative mechanics like bullet time. I was also drawn to the use of low-poly graphics, which can provide a unique and stylized look to games while allowing for smoother gameplay. Combining these two elements, I created FPS Fun, a game that offers a thrilling and action-packed experience for players. I wanted to create a game that captures the essence of the FPS genre while also offering new and exciting elements like parkour mechanics and active ragdoll enemies. Overall, FPS Fun is a game that I'm proud to have developed and I hope that players will enjoy playing it as much as I enjoyed creating it.
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
            One of the biggest challenges I faced while developing FPS Fun was implementing the active ragdoll physics system for the enemies. It took a lot of trial and error to get the physics to behave realistically while also being responsive to player actions. I had to balance the physics calculations with the game's performance, as having too many active ragdoll enemies at once could slow down the game. Through careful optimization of the physics system, I was able to achieve the right balance between realism and performance. Despite the difficulties, implementing the active ragdoll physics system was ultimately worth it, as it adds a level of immersion to the game and makes for more dynamic and entertaining gameplay.
          </p>

          <ul className="list-disc text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              Key Skills
            </span>
            <br></br>
            <br></br>
            <li>Skill in AI Development, with the ability to design and implement behavior trees, decision-making systems, and pathfinding algorithms for complex AI systems.</li>
            <li>Expertise in Physics Simulation, with knowledge of Unity's physics engine to simulate realistic interactions between game objects and create immersive game environments.</li>
            <li>Familiarity with Unity Editor, with the ability to use Unity editor's interface and tools to prototype, test, and iterate on game mechanics and AI behavior.</li>
            <li>Collaboration Skills, with the ability to communicate effectively and work collaboratively with artists, designers, and other developers to create cohesive and polished game experiences.</li>
            <li>Creative Problem-Solving Skills, with a passion for problem-solving and creative thinking to overcome technical challenges and find innovative solutions that enhance gameplay and AI systems.</li>
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
