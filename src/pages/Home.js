import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";

import Footer from "../components/Footer";
import Header from "../components/Header";

// import logo from "../logo.svg";
import { Container } from "react-bootstrap";
import CustomHooks from "./CustomHooks";
import BasicHooks from "./BasicHooks";

const Home = () => {
  return (
    <>
      <Header />

      <Container className=" h-[15vmax]">
        <div className="flex items-center justify-between mt-8">
          <h1 className="inline-block mt-0 mr-4 text-3xl font-bold text-center underline">
            Welcome to REACT BASICS
          </h1>
          <div className="inline-block text-right w-fit">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <BookOpenIcon className="w-12 h-12 ml-4 animate-wiggle" />
            <BookOpenIcon className="w-12 h-12 ml-4 animate-spin-slow" />
            <BookOpenIcon className="w-12 h-12 ml-4 animate-[wiggle_.5s_ease-in-out_infinite]" />

            {/* <img src={logo} className="w-12 h-12 App-logo" alt="logo" /> */}
          </div>
        </div>
      </Container>

      <section className="my-8 w-[80%] 2xl:w-[66%] mx-auto bg-gray-600 rounded-md p-4">
        <BasicHooks />
      </section>

      <section className="my-8 w-[80%] 2xl:w-[66%] mx-auto bg-gray-600 rounded-md p-4">
        <CustomHooks />
      </section>

      <Footer />
    </>
  );
};

export default Home;
