import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import Image from "next/image";
import { easeCircleOut, easeElasticOut } from "d3-ease";

import headWear1 from "../public/images/headWear/headWear1.png";
import headWear2 from "../public/images/headWear/headWear2.png";
import headWear3 from "../public/images/headWear/headWear3.png";
import headWear4 from "../public/images/headWear/headWear4.png";

import shirt1 from "../public/images/shirts/shirt1.png";
import shirt2 from "../public/images/shirts/shirt2.png";
import shirt3 from "../public/images/shirts/shirt3.png";
import shirt4 from "../public/images/shirts/shirt4.png";

import tshirt1 from "../public/images/tshirts/tshirt1.png";
import tshirt2 from "../public/images/tshirts/tshirt2.png";
import tshirt3 from "../public/images/tshirts/tshirt3.png";
import tshirt4 from "../public/images/tshirts/tshirt4.png";

import jacket1 from "../public/images/jackets/jacket1.png";
import jacket2 from "../public/images/jackets/jacket2.png";
import jacket3 from "../public/images/jackets/jacket3.png";
import jacket4 from "../public/images/jackets/jacket4.png";

import belt1 from "../public/images/belts/belt1.png";
import belt2 from "../public/images/belts/belt2.png";
import belt3 from "../public/images/belts/belt3.png";
import belt4 from "../public/images/belts/belt4.png";

import short1 from "../public/images/shorts/short1.png";
import short2 from "../public/images/shorts/short2.png";
import short3 from "../public/images/shorts/short3.png";
import short4 from "../public/images/shorts/short4.png";

import trouser1 from "../public/images/trousers/trouser1.png";
import trouser2 from "../public/images/trousers/trouser2.png";
import trouser3 from "../public/images/trousers/trouser3.png";
import trouser4 from "../public/images/trousers/trouser4.png";

import shoes1 from "../public/images/shoes/shoes1.png";
import shoes2 from "../public/images/shoes/shoes2.png";
import shoes3 from "../public/images/shoes/shoes3.png";
import shoes4 from "../public/images/shoes/shoes4.png";

const Nuka = ({ name }) => {
  const __dirName = `/images/${name}/`;

  switch (name) {
    case "headWear":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={headWear1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={headWear2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={headWear3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={headWear4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "shirts":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={shirt1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={shirt2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={shirt3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={shirt4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "tshirts":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={tshirt1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={tshirt2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={tshirt3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={tshirt4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "jackets":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={jacket1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={jacket2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={jacket3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={jacket4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "belts":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={belt1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={belt2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={belt3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={belt4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "shorts":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={short1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={short2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={short3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={short4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "trousers":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={trouser1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={trouser2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={trouser3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={trouser4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "shoes":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={shoes1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={shoes2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={shoes3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={shoes4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
  }
};

export default Nuka;
