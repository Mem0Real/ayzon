import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import Image from "next/image";
import { easeCircleOut, easeElasticOut } from "d3-ease";

import cape1 from "../public/images/capes/1.png";
import cape2 from "../public/images/capes/2.png";
import cape3 from "../public/images/capes/3.png";
import cape4 from "../public/images/capes/4.png";
import cape5 from "../public/images/capes/5.png";
import cape6 from "../public/images/capes/6.png";
import cape7 from "../public/images/capes/7.png";

import embroidery1 from "../public/images/embroidery/1.png";
import embroidery2 from "../public/images/embroidery/2.png";
import embroidery3 from "../public/images/embroidery/3.png";
import embroidery4 from "../public/images/embroidery/4.png";
import embroidery5 from "../public/images/embroidery/5.png";
import embroidery6 from "../public/images/embroidery/6.png";
import embroidery7 from "../public/images/embroidery/7.png";

import medical1 from "../public/images/medical/1.png";
import medical2 from "../public/images/medical/2.png";
import medical3 from "../public/images/medical/3.png";
import medical4 from "../public/images/medical/4.png";
import medical5 from "../public/images/medical/5.png";
import medical6 from "../public/images/medical/6.png";
import medical7 from "../public/images/medical/7.png";

import safety1 from "../public/images/safety/1.png";
import safety2 from "../public/images/safety/2.png";
import safety3 from "../public/images/safety/3.png";
import safety4 from "../public/images/safety/4.png";
import safety5 from "../public/images/safety/5.png";
import safety6 from "../public/images/safety/6.png";
import safety7 from "../public/images/safety/7.png";

import school1 from "../public/images/school/1.png";
import school2 from "../public/images/school/2.png";
import school3 from "../public/images/school/3.png";
import school4 from "../public/images/school/4.png";
import school5 from "../public/images/school/5.png";
import school6 from "../public/images/school/6.png";
import school7 from "../public/images/school/7.png";

import security1 from "../public/images/security/1.png";
import security2 from "../public/images/security/2.png";
import security3 from "../public/images/security/3.png";
import security4 from "../public/images/security/4.png";
import security5 from "../public/images/security/5.png";
import security6 from "../public/images/security/6.png";
import security7 from "../public/images/security/7.png";

import working1 from "../public/images/working/1.png";
import working2 from "../public/images/working/2.png";
import working3 from "../public/images/working/3.png";
import working4 from "../public/images/working/4.png";
import working5 from "../public/images/working/5.png";
import working6 from "../public/images/working/6.png";
import working7 from "../public/images/working/7.png";

const Nuka = ({ name }) => {
  const __dirName = `/images/${name}/`;

  switch (name) {
    case "capes":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={cape1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={cape2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={cape3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={cape4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />

            <Image
              src={cape5}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={cape6}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={cape7}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "embroidery":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={embroidery1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={embroidery2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={embroidery3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={embroidery4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />

            <Image
              src={embroidery5}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={embroidery6}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={embroidery7}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "medical":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={medical1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={medical2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={medical3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={medical4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />

            <Image
              src={medical5}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={medical6}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={medical7}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "safety":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={safety1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={safety2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={safety3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={safety4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />

            <Image
              src={safety5}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={safety6}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={safety7}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "school":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={school1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={school2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={school3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={school4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />

            <Image
              src={school5}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={school6}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={school7}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "security":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={security1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={security2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={security3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={security4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />

            <Image
              src={security5}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={security6}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={security7}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "working":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={false}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
            }}
          >
            <Image
              src={working1}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={working2}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={working3}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={working4}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />

            <Image
              src={working5}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={working6}
              alt={`${name} image`}
              className="object-contain h-56 w-full"
              width={500}
              height={500}
            />
            <Image
              src={working7}
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
