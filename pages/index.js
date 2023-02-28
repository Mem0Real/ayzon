import Layout from "../components/layout";
import Image from "next/image";
import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";

export default function Home() {
  return (
    <Layout>
      <div className="box-border text-center bg-slate-200  dark:bg-slate-900">
        <header className="flex flex-col justify-center items-center text-2xl h-screen bg-heroBg bg-no-repeat bg-center bg-cover bg-fixed">
          <h1 className="lg:mt-12 border-x-2 px-12 py-6 mb-12 rounded-md text-3xl backdrop-blur-md backdrop-opacity-75 text-black">
            Welcome To <br />
            Ayzon Manufacturing
          </h1>
        </header>
        <div className="p-12 bg-slate-300">
          <h1 className="text-xl">
            We pride ourselves in the qualities of our products.
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
                Striving to produce high quality garments
                <br className="inline-block" />
                All made here in Ethiopia.
              </h1>
              <p className="mb-8 leading-relaxed text-center">
                We provide high quality apparels of all kinds for our fellow
                customers. We work tirelessly to prepare and produce these
                multitude of merchandises in a timely manner.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded-xl"
                alt="img1"
                src={img1}
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <div className="p-12 bg-slate-300">
          <h1 className="text-xl">Providing for all your clothing needs.</h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex lg:px-12 px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                className="object-cover object-center rounded-xl"
                alt="img2"
                src={img2}
                width={500}
                height={500}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
                From simple textiles to specific designs
                <br className="inline-block" />
                We have them all.
              </h1>
              <p className="mb-8 leading-relaxed text-center">
                We offer stock products with all kinds of colors and sizes for
                bulk requirements but we also provide specific designs and
                textures with unlimited choices.
              </p>
            </div>
          </div>
        </section>
        <div className="p-12 bg-slate-300">
          <h1 className="text-xl">
            We stand ready to provide you with your utmost desires.
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
                Got a time sensitive order?
                <br className="inline-block" />
                We can handle it.
              </h1>
              <p className="mb-8 leading-relaxed text-center">
                Here at Ayzon Manufacturing, our extremely efficient
                professionals are standing by to take how ever many orders you
                can offer. Complete with packaging and delivery, we can present
                our products in a lightning speed.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded-xl"
                alt="img3"
                src={img3}
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
