import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import Home from "../pages/Home";
import gsap from "gsap";
import { Toaster } from "react-hot-toast";

function GsapTransition() {
  const nodref = useRef(null);
  const location = useLocation();
  console.log("The location is :", location);

  // jab bhi hum location change hoga tab ye use effect run hoga, because ye useEffect hook ko hum dependent banane walehai location ke upar

  // when a page renders, useEffects runs first

  useEffect(() => {
    if (nodref.current) {
      gsap.fromTo(
        nodref.current,
        0.5,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      // gsap.fromTo() is used to animate from one state to another. Here, we animate the opacity from 0 to 1 over a duration of 0.5 seconds.

      // for smooth transition, we can use "ease" easing function as well.
    }
  }, [location]);
  // when we keep dependency array empty it means that: bhai ye page call hoga jab bhi tum refresh karoge

  //for Gsap:
  // (1)target
  // (2) logic

  return (
    <div ref={nodref}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
}

export default GsapTransition;
