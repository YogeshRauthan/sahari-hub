'use client'

import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
import Products from "./components/Products";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <div id="header">
        <Header />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="categories">
        <Categories />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Testimony />
      <Footer />
    </div>
  );
}