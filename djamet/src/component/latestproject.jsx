import { useState } from "react";

const LatestProject = () => {
  const icons = [
    {
      icons: (
        <svg
          className=" w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className=" bg-bg3 bg-cover font-comic flex justify-between pl-28 pr-28 max-sm:pl-5 max-sm:pr-5 h-16 text-white max-sm:h-16">
        <div className=" flex flex-col justify-center">
          <p className=" text-lg md:text-xl">Latest Project</p>
        </div>
        <div className=" flex flex-col justify-center">
          <div>{icons[0].icons}</div>
        </div>
      </div>
      <div className=" bg-bg3 bg-cover flex justify-center pb-16 pt-10 overflow-scroll max-sm:flex-col">
        <div className=" transition-all">
          <div className=" flex justify-center p-3">
            <div className=" bg-wa w-60 h-60 bg-cover rounded-2xl relative">
              <div className=" bg-black text-white p-4 rounded-xl w-14 text-center font-mono absolute -bottom-2 -right-2">
                <p>01</p>
              </div>
            </div>
          </div>
          <div className=" flex font-comic gap-2 justify-center">
            <div className=" flex flex-col justify-center">
              <p className=" text-lg">Whatsapp Clone</p>
            </div>
            <div className=" flex flex-col justify-center">
              <a
                className=" bg-slate-500 rounded-lg p-1 text-white"
                href="https://wacl0ne.netlify.app/"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
        <div
          className=" transition-all"
          // style={{ transform: `translate(${content2}px` }}
        >
          <div className=" flex justify-center p-3">
            <div className=" bg-books w-60 h-60 bg-cover rounded-2xl relative">
              <div className=" bg-black text-white p-4 rounded-xl w-14 text-center font-mono absolute -bottom-2 -right-2">
                <p>02</p>
              </div>
            </div>
          </div>
          <div className=" flex font-comic gap-2 justify-center">
            <div className=" flex flex-col justify-center">
              <p className=" text-lg">Books Saver</p>
            </div>
            <div className=" flex flex-col justify-center">
              <a
                className=" bg-slate-500 rounded-lg p-1 text-white"
                href="https://b0oksmanager.netlify.app"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
        <div
          className=" transition-all"
          // style={{ transform: `translate(${content3}px` }}
        >
          <div className=" flex justify-center p-3">
            <div className=" bg-spotipeq w-60 h-60 bg-cover rounded-2xl relative">
              <div className=" bg-black text-white p-4 rounded-xl w-14 text-center font-mono absolute -bottom-2 -right-2">
                <p>03</p>
              </div>
            </div>
          </div>
          <div className=" flex font-comic gap-2 justify-center">
            <div className=" flex flex-col justify-center">
              <p className=" text-lg">SpotipeQ</p>
            </div>
            <div className=" flex flex-col justify-center">
              <a
                className=" bg-slate-500 rounded-lg p-1 text-white"
                href="https://spotipeq.netlify.app"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
        <div
          className=" transition-all"
          // style={{ transform: `translate(${content4}px` }}
        >
          <div className=" flex justify-center p-3">
            <div className=" bg-todo w-60 h-60 bg-cover rounded-2xl relative">
              <div className=" bg-black text-white p-4 rounded-xl w-14 text-center font-mono absolute -bottom-2 -right-2">
                <p>04</p>
              </div>
            </div>
          </div>
          <div className=" flex font-comic gap-2 justify-center">
            <div className=" flex flex-col justify-center">
              <p className=" text-lg">Todos App</p>
            </div>
            <div className=" flex flex-col justify-center">
              <a
                className=" bg-slate-500 rounded-lg p-1 text-white"
                href="https://spotipeq.netlify.app"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
        <div
          className=" transition-all"
          // style={{ transform: `translate(${content5}px` }}
        >
          <div className=" flex justify-center p-3">
            <div className=" bg-dstore w-60 h-60 bg-cover rounded-2xl relative">
              <div className=" bg-black text-white p-4 rounded-xl w-14 text-center font-mono absolute -bottom-2 -right-2">
                <p>05</p>
              </div>
            </div>
          </div>
          <div className=" flex font-comic gap-2 justify-center">
            <div className=" flex flex-col justify-center">
              <p className=" text-lg">Digital Stores</p>
            </div>
            <div className=" flex flex-col justify-center">
              <a
                className=" bg-slate-500 rounded-lg p-1 text-white"
                href="https://digital-stores.vercel.app/"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
        <div className=" transition-all">
          <div className=" flex justify-center p-3">
            <div className=" bg-postingAja w-60 h-60 bg-cover rounded-2xl relative">
              <div className=" bg-black text-white p-4 rounded-xl w-14 text-center font-mono absolute -bottom-2 -right-2">
                <p>06</p>
              </div>
            </div>
          </div>
          <div className=" flex font-comic gap-2 justify-center">
            <div className=" flex flex-col justify-center">
              <p className=" text-lg">Posting Aja Dulu</p>
            </div>
            <div className=" flex flex-col justify-center">
              <a
                className=" bg-slate-500 rounded-lg p-1 text-white"
                href="https://posting-aja-dulu.vercel.app/"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProject;
