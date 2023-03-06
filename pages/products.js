import React from "react";
import Layout from "../components/layout";
import Nuka from "../carousel/Nuka";

const products = () => {
  return (
    <div className="bg-productsBg bg-fixed bg-center bg-no-repeat bg-cover">
      <Layout>
        <div className="h-56 flex flex-col pt-36 justify-start items-center">
          <h1 className="text-3xl backdrop-blur-lg border-x-8 border-x-yellow-700 rounded-xl text-center md:px-12 px-2 text-white font-Josefin">
            Some Of The Products <br />
            We Offer Include
          </h1>
        </div>
        {/* <div className="h-6 mt-12 rounded-3xl bg-transparent border-y-4 border-double w-5/6 mx-auto"></div> */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <p className="lg:w-2/3 mx-auto leading-relaxed text-white font-raleWay">
                We have got the finest and most reliable clothing and
                accessories for all intends and purposes. <br />
                Browse below to your heart&apos;s content.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {/* Capes */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="capes" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200 font-Josefin">
                      Capes
                    </h2>
                    <p className="mb-4 text-white font-raleWay">
                      Military, Casual as well as security and advertisement
                      capes are available for purchase.
                    </p>
                  </div>
                </div>
              </div>
              {/* Embroidery */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="embroidery" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200 font-Josefin">
                      Embroidery Clothing
                    </h2>
                    <p className="mb-4 text-white font-raleWay">
                      We can design and embroid different kinds of textures as
                      well as pictures on shirts, tshirts, jackets and
                      everything in between.
                    </p>
                  </div>
                </div>
              </div>
              {/* Medical */}
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="medical" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200 font-Josefin">
                      Medical Scrubs
                    </h2>
                    <p className="mb-4 text-white font-raleWay">
                      Nurses, Doctors and all medical staff can depend on our
                      quality product. It&apos;s reliable and durable.
                    </p>
                  </div>
                </div>
              </div>
              {/* Safety */}
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="safety" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200 font-Josefin">
                      Safety Clothes
                    </h2>
                    <p className="mb-4 text-white font-raleWay">
                      Heavy duty, Protective clothes for our working community.
                      We provide all kinds of safety equipment that can prevent
                      injury of all kind.
                    </p>
                  </div>
                </div>
              </div>
              {/* School */}
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="school" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200 font-Josefin">
                      School Uniforms
                    </h2>
                    <p className="mb-4 text-white font-raleWay">
                      We provide uniforms for all schools. We can fit them to
                      our customer&apos;s physique as well as ship them in bulk.
                    </p>
                  </div>
                </div>
              </div>
              {/* Security */}
              <div className="p-4 lg:w-1/2 lg:mt-20 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="security" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200 font-Josefin">
                      Security Uniform
                    </h2>
                    <p className="mb-4 text-white font-raleWay">
                      We provide a multitude of uniforms for security personnel.
                      Our merchandise is one of a kind that you can rely on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center -m-4">
              {/* Working */}
              <div className="p-4 lg:w-1/2 lg:mt-40 mt-0">
                <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="working" />
                    </div>
                  </div>
                  <div className="flex-grow text-center mt-0 lg:mt-12">
                    <h2 className="title-font font-medium text-lg text-gray-200 font-Josefin">
                      Working Apparel
                    </h2>
                    <p className="mb-4 text-white font-raleWay">
                      We provide overalls for our blue collar customers.
                      Mechanics, engineers and electricians can benefit from our
                      merchandises.
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
