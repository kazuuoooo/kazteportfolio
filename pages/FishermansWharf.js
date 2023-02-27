import { useState } from "react";
import Head from "next/head";
import deved from "../public/fishermanswharf/web0.jpg";
import Image from "next/image";
import web1 from "../public/fishermanswharf/web1.mp4";
import web2 from "../public/fishermanswharf/web2.jpg";
import web3 from "../public/fishermanswharf/web3.jpg";

export default function FishermansWharf(props) {
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
              Fisherman's Wharf
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              3D Cyberpunk Scene Rendered in Blender
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            Fisherman's Wharf is a cyberpunk scene I created in Blender, based on a location in my hometown with a harbor theme. The environment features a fully modeled, textured, and rendered harbor area with neon-lit storefronts lining the streets and towering skyscrapers in the background. The use of dynamic lighting and shadows creates a moody and atmospheric ambiance. The animation in the scene is achieved through the use of physics flags waving in the wind, spinning fans, and flickering neon signs, giving the environment a sense of motion and energy. Overall, I'm proud of how this project turned out and the level of detail I was able to achieve in the environment.
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
            My cyberpunk adaptation of Fisherman's Wharf was inspired by the unique look and feel of this specific area in my hometown. Fisherman's Wharf is characterized by its harbor setting, with boats lining the docks and seafood vendors selling their catch on the streets. I drew inspiration from the cyberpunk genre to reimagine this familiar environment in a new and exciting way. By incorporating neon lights, towering skyscrapers, and other futuristic elements, I was able to create a visually striking scene that captures the essence of Fisherman's Wharf while transporting viewers to a futuristic world full of possibility and excitement.</p>
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

          <div>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              {" "}
              Challenges and Solution
            </span>
            <br></br>
            <br></br>
            One of the challenges I faced while creating this project was optimizing the scene for efficient rendering. I found that as I added more details to the environment, the scene became more complex and difficult to render. To solve this issue, I had to learn about techniques for optimizing my models and reducing the number of polygons in my scene. Additionally, I had to master the art of texture mapping to ensure that my textures were applied correctly and efficiently, which required a lot of trial and error. Through persistence and experimentation, I was able to overcome these challenges and achieve the level of detail and efficiency that I was aiming for in my final render. The experience taught me a lot about the importance of optimizing my projects and the value of persistence and experimentation in problem-solving.
          </p>

          <ul className="list-disc text-md py-5 leading-8 text-gray-800 dark:text-gray-200  md:text-xl">
            <span className="subheading text-3xl py-1 dark:text-white">
              Key Skills
            </span>
            <br></br>
            <br></br>
            <li>Prototyping: Experienced in quickly creating rough models and testing them for complex scenes.</li>
            <li>Modelling: Skilled in creating accurate 3D models for realistic environments, including boats, buildings, and other objects.</li>
            <li>Lighting: Proficient in choosing and applying various lighting techniques to achieve desired effects in scenes.</li>
            <li>Rendering: Experienced in using rendering software to generate high-quality images and animations from 3D models.</li>
            <li>Optimization: Proficient in optimizing scenes for efficient rendering, including reducing polygon count and optimizing textures.</li>
            <li>Texturing and UV Mapping: Skilled in accurately and efficiently applying textures using UV mapping techniques for creating detailed and realistic environments.</li>
          </ul>
          </div>
          
          <div className="">
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
