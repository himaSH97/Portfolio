import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiTwotonePhone,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import {
  SiFigma,
  SiAdobeillustrator,
  SiSketchup,
  SiAdobephotoshop,
  SiPython,
  SiAngular,
  SiServerless,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiKeras,
  SiAmazonaws,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { motion, useScroll, easeInOut, AnimatePresence   } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [message, setMessege] = useState("");
  const [from, setFrom] = useState(""); 
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const sendEmail = (content) => {
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_KEY, content, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then(
        (result) => {
          toast.success('Success!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        setMessege("")
        setFrom("")
        },
        (error) => {
          toast.error('Error', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
          console.log(error.text);
        }
      );
  };
  const handleMsgChange = (e) => {
    setMessege(e.target.value);
  };
  const handleChange = (e) => {
    setFrom(e.target.value);
  };

  const handleClick = (type) => {
    switch (type) {
      case "linkedIn":
        window.open("https://www.linkedin.com/in/nipunhimash", "linkedinTab");
      case "git":
        window.open("https://github.com/himaSH97", "githubTab");
      case "email":
    }
  };
  return (
    <>
    <AnimatePresence>
      <motion.div
        ref={ref}
        className="bg-red-800"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className=" h-1"></div>
        <motion.div
          className="bg-gray-500"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.1, duration: 0.25, ease: "easeInOut" }}
        >
          <div className=" h-2"></div>
          <motion.div
            className="bg-gray-700 "
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.25, ease: "easeInOut" }}
          >
            <div className=" h-4"></div>
            <motion.div
              className="bg-gray-800 h-auto"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.25, ease: "easeInOut" }}
            >
              <div className="  flex justify-around ">
                <div className="m-5 ml-10 flex flex-col gap-2 text-xl">
                  <AiFillLinkedin
                    className="text-zinc-100 hover:text-black"
                    onClick={() => {
                      handleClick("linkedIn");
                    }}
                  />
                  <AiFillGithub
                    className="text-zinc-100 hover:text-black"
                    onClick={() => {
                      handleClick("git");
                    }}
                  />
                  <AiTwotonePhone className="text-zinc-100 hover:text-black" />
                  <AiFillFacebook className="text-zinc-100 hover:text-black" />
                  <AiFillInstagram className="text-zinc-100 hover:text-black" />
                </div>
                <div className="flex flex-col md:flex-row gap-5 mt-2 mr-5">
                  <div className="flex flex-col">
                    <label className="text-slate-300 text-sm">
                      Enter your Email:
                    </label>
                    <input
                      type="text"
                      value={from}
                      className="border-b-0.5  bg-gray-600 rounded  outline-none text-center"
                      onChange={handleChange}
                    />
                    <label className="text-slate-300 text-sm">
                      Enter your Message:
                    </label>
                    <input
                      type="text"
                      value={message}
                      className="h-20 w-60 border-b-0.5 bg-gray-600 rounded outline-none text-center"
                      onChange={handleMsgChange}
                    />
                  </div>
                  <button
                    className="p-2 h-8 text-center rounded bg-gray-900 md:mt-5 text-slate-500 text-xs"
                    disabled={message === "" && from === ""}
                    onClick={() => {
                      sendEmail({ message: message, from: from });
                    }}
                  >
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              </div>

              <div className="bg-red-800 h-[0.5px] ml-10 mr-10 mb-3 "></div>
              <div className="flex flex-col md:flex-row text-base gap-3 md:gap-24 justify-center align-middle pb-5 opacity-60 ">
                <div className=" flex flex-row gap-3 justify-center">
                  <FaJava className="text-zinc-100" />
                  <SiJavascript className="text-zinc-100  " />
                  <SiHtml5 className="text-zinc-100" />
                  <SiCss3 className="text-zinc-100" />
                  <SiPython className="text-zinc-100" />
                </div>
                <div className=" flex flex-row gap-3 justify-center">
                  <DiNodejs className="text-zinc-100 " />
                  <SiReact className="text-zinc-100 " />
                  <SiAngular className="text-zinc-100" />
                  <SiTailwindcss className="text-zinc-100" />
                  <SiTensorflow className="text-zinc-100" />
                  <SiKeras className="text-zinc-100" />
                  <SiAmazonaws className="text-zinc-100" />
                  <SiServerless className="text-zinc-100" />
                </div>
                <div className=" flex flex-row gap-3 justify-center">
                  <SiAdobephotoshop className="text-zinc-100" />
                  <SiAdobeillustrator className="text-zinc-100" />
                  <SiFigma className="text-zinc-100" />
                  <SiSketchup className="text-zinc-100" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Footer;
