import React from "react";
import DetailsNavBar from "./details_nav_bar";
import SecondNavBar from "./second-nav-bar";
import Details  from "./details";
import Specialty from './specialty' 
import Transport from "./transport";
import Testimonials from "./testimonials";
import WhyUsComponents from "./whyChooseUs";
import Teams from "./team";
import Newsletter from "./newsletter";
import Blog from './blog'
import Footer from "./footer";
import './index.css'


const Components = () => {
  return (
    <>
      <DetailsNavBar />
      <SecondNavBar/>
      <Details/>
      <Specialty/>
      <Transport/>
      <Testimonials/>
      <WhyUsComponents/>
      <Teams/>
      <Newsletter/>
      <Blog/>
      <Footer/>
    </>
  );
};

export default Components;
