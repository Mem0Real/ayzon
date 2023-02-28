import React from "react";
import Layout from "../components/layout";

const about = () => {
  return (
    <Layout>
      <div className="bg-aboutBg text-white bg-fixed bg-center bg-no-repeat bg-cover pt-24">
        <div className="flex flex-col justify-center items-center">
          <h3 className="underline text-3xl mt-12 text-black">About us</h3>
          {/* Mission */}
          <div className="text-center mt-12 w-auto md:w-1/2 rounded-3xl text-black backdrop-blur-2xl backdrop-brightness-125">
            <h2 className="underline mt-6 text-2xl">Mission</h2>
            <ul className="mt-5 py-6">
              <li>
                To become a ground-breaking institution regarding textile
                Manufacturing by 2030!
              </li>
              <li>To create job opportunities for thousands of people!</li>
              <li>To be the best in the industry!</li>
            </ul>
          </div>

          {/* Vision */}
          <div className="text-center mt-12 bg-black w-auto md:w-1/2 rounded-3xl text-white">
            <h2 className="underline mt-6 text-2xl">Vision</h2>
            <ul className="mt-5 py-6">
              <li>
                To open multiple factories as well as supplying stores all across Ethiopia.
              </li>
              <li>To export and increase our country&apos;s economy.</li>
            </ul>
          </div>

          {/* Objective */}
          <div className="text-center mt-12 w-auto md:w-1/2 rounded-3xl text-black mb-12 backdrop-blur-2xl backdrop-brightness-125">
            <h2 className="underline mt-6 text-2xl">Objective</h2>
            <ul className="mt-5 py-6">
              <li>
                To produce high quality apparels that can compete in the
                international market,
              </li>
              <li>To attract capital and technological know-how,</li>
              <li>To generate reasonable profit,</li>
              <li>
                To focus on strategies that can manifest the customers&apos;
                satisfaction.
              </li>
            </ul>
            <h5></h5>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
