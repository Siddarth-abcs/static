"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar";
import { Hero } from "./Hero";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
