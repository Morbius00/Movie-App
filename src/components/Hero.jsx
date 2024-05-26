import React from "react";
import RedButton from "../common/Button";
import Background from "./assets/backgroungN.png";

const heroBackground = {
  backgroundImage: `url(${Background})`
};
function App() {
  return (
    <div className="flex items-center justify-center">
      <div className=" text-white h-auto w-full rounded-xl" style={heroBackground}>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mt-16 ">
            <div className="md:text-5xl text-2xl font-bold mb-4">
              Unlimited movies, TV shows and more
            </div>
            <p className="text-xl mb-8">Watch anywhere. Any anytime.</p>
            <p className="text-base mb-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col md:flex-row  justify-center items-center md:space-x-5">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded-md w-32 md:w-auto"
              />
              <RedButton className="md:m-auto mt-2">Get Started</RedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
