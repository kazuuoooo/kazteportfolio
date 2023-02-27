import deved from "../public/fableland/web0.jpg";
import Image from "next/image";
import web1 from "../public/fableland/web1.mp4";
import web2 from "../public/fableland/web2.jpg";
import web3 from "../public/fableland/web3.jpg";

export default function FableLand(props) {
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
              FABLELAND
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              2D RPG Pixel Art Adventure
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            Fableland is a pixel art platformer RPG that takes players on a journey through a magical world filled with danger and adventure. With a focus on enemy AI and 2D lighting effects, the game offers a unique gameplay experience that blends classic 2D platforming with modern game development techniques. Players must explore the world of Fableland, battle enemies, and uncover the secrets of this mysterious land.
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
            Fableland was inspired by a combination of my love for classic 2D platformers and my desire to experiment with advanced game development techniques. As a lifelong fan of platforming games like Super Mario Bros. and Castlevania, I wanted to create a game that would capture the spirit of those classic titles while also adding modern elements. At the same time, I was eager to explore new techniques like 2D lighting and enemy AI to create a truly unique gameplay experience.
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
            One of the biggest challenges I faced while creating Fableland was implementing AI pathfinding for platformer-style jumps. This was particularly difficult because platforming games require a level of precision and accuracy that can be hard to achieve with traditional pathfinding algorithms. To overcome this challenge, I used a combination of A* pathfinding and custom movement calculations to ensure enemies could navigate the environment accurately. By fine-tuning these systems and testing them extensively, I was able to create enemies that could navigate the world of Fableland with ease, making for a more challenging and rewarding gameplay experience.
          </p>

          <ul className="list-disc text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              Key Skills
            </span>
            <br></br>
            <br></br>
              <li>Proficient in C# programming language for game development</li>
              <li>Knowledgeable in implementing algorithms such as A* for pathfinding and collision detection</li>
              <li>Skilled in character programming, including movement, animation, and combat</li>
              <li>Experienced in programming enemy AI with behaviors such as attacking, dodging, and retreating</li>
              <li>Capable of designing engaging levels that offer a variety of gameplay experiences</li>
              <li>Proficient in creating pixel art graphics for characters, backgrounds, and UI elements</li>
          </ul>
          {renderImage(web3)}

          <div className="basis-1/3 flex-1 ">
            <h3 className="text-3xl py-1 dark:text-white ">Gameplay</h3>
            <br></br>
            <div className="image-container">
              <video className="rounded-lg" src={web1} muted controls> </video> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
