"use client";
import React, { useEffect, useState } from "react";
import { PiGithubLogoLight, PiNotepad, PiTicket } from "react-icons/pi";
import {
  SiAsciidoctor,
  SiCss3,
  SiDocsdotrs,
  SiFoodpanda,
  SiFramer,
  SiIfood,
} from "react-icons/si";
import axios from "axios";
import TestimonialTooltip from "@/app/TestimonialTooltip/page";
import { motion, useAnimation } from "framer-motion";
import { FaUserDoctor } from "react-icons/fa6";
import Link from "next/link";

function Page() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/leetcode");
        console.log(response);
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const leetcodeData = userData?.leetcode_data;
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit hidden  max-xl:hidden "
    >
      <div className=" md:w-60 w-full rounded-2xl h-fit sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-neutral-200">Leetcode Grind</h2>
            <div className="text-md my-3 text-neutral-400 font-RubikRegular">
              <div className="flex space-x-1 text-md">
                <p>Username : </p>
                <p>{userData?.username}</p>
              </div>
              <div className="flex space-x-1 text-md text-green-500">
                <p>Easy : </p>
                <p>
                  {leetcodeData && leetcodeData?.easySolved}/
                  {leetcodeData && leetcodeData?.totalEasy}
                </p>
              </div>
              <div className="flex space-x-1 text-md text-yellow-500">
                <p>Medium : </p>
                <p>
                  {leetcodeData && leetcodeData?.mediumSolved}/
                  {leetcodeData && leetcodeData?.totalMedium}
                </p>
              </div>
              <div className="flex space-x-1 text-md text-red-500">
                <p>Hard : </p>
                <p>
                  {leetcodeData && leetcodeData?.hardSolved}/
                  {leetcodeData && leetcodeData?.totalHard}
                </p>
              </div>
              <div className="flex space-x-1 text-md text-white">
                <p>Total : </p>
                <p>
                  {leetcodeData && leetcodeData?.totalSolved}/
                  {leetcodeData && leetcodeData?.totalQuestions}
                </p>
              </div>
            </div>
            <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium text-neutral-50 ">
              <Link
                href={"https://leetcode.com/saksham1612"}
                target="_blank"
                className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium text-neutral-50 "
              >
                Check it out !
              </Link>
            </button>

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-RubikMedium text-neutral-200">Patents</h1>
              <Link
                href={
                  "https://drive.google.com/file/d/1P3e9bQoBRN3Us9BaFZJnKjOZ7opIogJM/view?usp=sharing"
                }
                className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md "
              >
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiTicket className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  ATTENDANCE RECORD
                  <br />
                  AND MANAGEMENT SYSTEM
                </h3>
              </Link>
              <Link
                href={
                  "https://drive.google.com/file/d/1CEkVdEhFdfELO3eTa8lt8qBfVD3MT19s/view?usp=drive_link"
                }
                className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md"
              >
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <FaUserDoctor className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  FOOD RECOMMENDER <br /> WITH ANALYSIS
                </h3>
              </Link>
              {/* <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiCss3 className="text-lg" />
                </div>
                <h3 className="text-xs ">TailwindCSS tips</h3>
              </div> */}

              <div className="border border-neutral-700 my-5" />

              <div className="flex items-center justify-center gap-x-2">
                <TestimonialTooltip />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 object-cover rounded-lg"
            src="/game.jpg"
            alt=""
          />
          <p className="my-3 font-RubikMedium text-sm">3D Games in Reactjs</p>
          <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium ">
            Get Now @20% OFF
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}

export default Page;
