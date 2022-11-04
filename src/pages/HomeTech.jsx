import React from "react";
import ButtonTech from "../event/ButtonHomeTech";
import homeImage from "../img/homeImage.png";
import imageAbout from "../img/imageAbout.png";
import ItemTech from "../component/ItemTech";

export default function HomeTech() {
  return (
    <>
      <div className="h-auto px-10 pt-28 md:items-center lg:flex lg:items-center lg:justify-between lg:px-10">
        <div className="mb-4 pt-5 lg:w-1/2">
          <div className="text">
            <h1 className="text-2xl font-bold text-green-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              laboriosam?
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus reprehenderit placeat cum odio. Ad aut repellat aliquid,
              suscipit nesciunt soluta tenetur perspiciatis sit, atque
              necessitatibus ab magni quas deserunt facilis, obcaecati
              perferendis error corrupti eligendi dicta quam commodi. Ex
              temporibus numquam voluptate ea ab velit dignissimos odio quo
              obcaecati itaque!
            </p>
          </div>
          <div className="btn py-5">
            <ButtonTech />
          </div>
        </div>
        <div className="image md:flex md:justify-center">
          <img src={homeImage} alt="" />
        </div>
      </div>
      <div className="about mt-40">
        <h1 className="text-center text-xl font-bold">About Us</h1>
        <div className="About px-10 pt-10 pb-10 lg:flex lg:items-center lg:justify-between">
          <div className="textAbout lg:w-2/4">
            <p className="pb-4 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              ex, fuga quis culpa earum velit laboriosam sequi ipsam neque non
              quidem placeat eos nam deleniti maxime pariatur amet facilis
              ipsum. Possimus aspernatur dolor, consequatur quasi optio sequi
              omnis laudantium nihil eum recusandae quas molestiae cupiditate?
              Dolores quas quia suscipit. Eos accusamus modi quaerat autem et,
              corporis quisquam magni impedit! Eaque itaque numquam quod quasi
              quibusdam optio nobis ratione tempore, nisi eveniet voluptatem
              asperiores harum tenetur dolores. Nostrum voluptate libero dolor.
            </p>
          </div>
          <div className="imageAbout">
            <img src={imageAbout} alt="imageAbout md:flex md:justify-center" />
          </div>
        </div>
      </div>
      <div className="product px-10">
        <h1 className="py-0 text-center text-xl font-bold">Top Product</h1>
        <div className="md:grid-col-2 grid w-full lg:grid-cols-4">
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
        </div>
      </div>
    </>
  );
}
