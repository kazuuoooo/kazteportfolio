import { useState } from "react";
import Head from "next/head";
import deved from "../public/masterofcastles/web0.jpg";
import Image from "next/image";
import web1 from "../public/masterofcastles/web1.mp4";
import web2 from "../public/masterofcastles/web2.jpg";
import web3 from "../public/masterofcastles/web3.jpg";

export default function MasterOfCastles(props) {
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
              Master Of Castles
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              3D Third-Person Epic Battle Simulator
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            This is a 3D third-person action-adventure RPG that focuses on massive epic battles. Players will fight challenging enemies and lead their army into sweeping clashes of swords and strategy. The game boasts an engaging combat system that emphasizes large-scale battles, making it a thrilling adventure for fans of epic fantasy. Get ready to become a hero of legend!
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
            Inspired by my love for big battle simulator games, this 3D third-person action-adventure RPG lets players lead their own army into epic battles, offering a unique and unforgettable experience that emphasizes strategic thinking and skillful execution. As a solo developer, I wanted to create a game that would put players right in the middle of the action, allowing them to experience the rush of commanding troops firsthand.
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
One of the key challenges in developing this game was the need to have a large number of enemies on the screen at once without sacrificing performance. To overcome this challenge, I implemented a Level of Detail (LOD) system, which adjusts the level of detail of each enemy based on their distance from the player. This allowed the game to maintain a high level of detail for enemies in close proximity, while reducing the detail for enemies that are farther away, resulting in improved performance.

Another solution was to use faster algorithms and optimize the AI to reduce the processing load. By using efficient data structures and algorithms, the game is able to process a large number of enemies at once without sacrificing performance. The AI was also optimized to run fewer calculations, allowing the game to run smoothly even during intense battles with multiple enemies.

In addition, I made sure to balance the number of enemies on screen with the capabilities of the player character. This allowed for challenging battles while also ensuring that the game remained playable and enjoyable.
          </p>

          <ul className="list-disc text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              Key Skills
            </span>
            <br></br>
            <br></br>
              <li>Proficiency in Unity C# Programming, with knowledge of Unity C# programming language and its features to create custom scripts, work with game objects and components, and manage assets.</li>
              <li>Skill in AI Development, with the ability to design and optimize behavior trees, decision-making systems, and pathfinding algorithms for large scale battle simulations.</li>
              <li>Expertise in Combat Mechanics, with knowledge of game design principles and mechanics for implementing dynamic combat systems, including ranged and melee combat, formations, and unit abilities.</li>
              <li>Experience with Large Scale Battles, with knowledge of optimization techniques, such as level of detail (LOD) systems, occlusion culling, and other performance optimization techniques to handle large numbers of units and objects in real-time.</li>
              <li>Familiarity with Unity Editor, with the ability to use Unity editor's interface and tools to prototype, test, and iterate on game mechanics and AI behavior.</li>
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
