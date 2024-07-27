import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import React from "react";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">PHOTOS</h3>
      {/* all my photos will be listed inside this div */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
        {/* image card */}
        <ImageCard
          title="The Beach"
          author="Varun"
          img="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price={10}
          icon1={
            <FaCartShopping className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-3" />
          }
          icon2={
            <IoIosHeart className="text-3xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-3" />
          }
        />
        <ImageCard
          title="Cat Day"
          author="arun"
          img="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price={40}
          icon1={
            <FaCartShopping className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-3" />
          }
          icon2={
            <IoIosHeart className="text-3xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-3" />
          }
        />
        <ImageCard
          title="blossom"
          author="ishant"
          img="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price={30}
          icon1={
            <FaCartShopping className="text-3xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-3" />
          }
          icon2={
            <IoIosHeart className="text-3xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-3" />
          }
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
