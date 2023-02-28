import React from "react";
import Layout from "../components/layout";
import Nuka from "../carousel/Nuka";

const products = () => {
  return (
    <div className="bg-productsBg bg-fixed">
      <Layout>
        <div className="h-56 flex flex-col md:mt-36 mt-0 justify-start items-center">
          <h1 className="text-3xl backdrop-blur-lg border-x-8 border-x-yellow-700 rounded-xl text-center md:px-12 px-2 text-white">
            Some Of The Products <br />
            We Offer Include
          </h1>
        </div>
        {/* Upper Body */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">
                Upper Body
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We have got the finest and most reliable upper body clothing and
                accessories for all intends and purposes. <br />
                Browse below to your heart&apos;s content.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="headWear" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      HeadWear
                    </h2>
                    <p className="mb-4">
                      Top of the line hats, helmets, glasses, masks and so many
                      more. We can provide as individual or in bulk.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="shirts" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      Shirts
                    </h2>
                    <p className="mb-4">
                      Flawless shirts with a variety of color and size options
                      as well as fabrics are at your disposal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="tshirts" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      T-Shirts
                    </h2>
                    <p className="mb-4">
                      We offer Durable, Classy and Custom graphics designs to be
                      printed on them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="jackets" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      Jackets
                    </h2>
                    <p className="mb-4">
                      Heavy duty, light coats, rain coats and so much more
                      merchandises are available to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Lower Body */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">
                Lower Body
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We have provided a variety of options regarding clothings,
                accessories and footwear for our dear customers.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="belts" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      Belts
                    </h2>
                    <p className="mb-4">
                      Leather, synthetic or even utility belts are waiting for
                      your purchase.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="shorts" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      Shorts
                    </h2>
                    <p className="mb-4">
                      Be it sporting shorts, cargo shorts or street shorts, we
                      have them all.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="trousers" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      Trousers
                    </h2>
                    <p className="mb-4">
                      Jeans, khakis, pijamas and everything in between, these
                      indestructable apparels won&apos;t disappoint you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="shoes" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200">
                      Shoes
                    </h2>
                    <p className="mb-4">
                      You can choose from a vast amount of shoes collections
                      based on your needs. From slippers to construction boots,
                      we offer them at great prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default products;
