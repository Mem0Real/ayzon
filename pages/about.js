import React from "react";
import Layout from "../components/layout";

const about = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h3 className="underline text-2xl">About us</h3>
        <div className="h-56 text-center mt-12">
          <h2 className="underline">Objective</h2>
          <ul className="mt-5 border-spacing-24 border-2 p-12">
            <li>
              To produce high quality apparels that can compete in the
              international market
            </li>
            <li>To attract capital and technological know-how</li>
            <li>To generate reasonable profit</li>
            <li>
              To focus on strategies that can manifest the customers`
              satisfaction
            </li>
          </ul>
          <h5></h5>
        </div>
      </div>
    </Layout>
  );
};

export default about;
