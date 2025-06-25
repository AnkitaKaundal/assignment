"use client";
import { useState } from "react";
import user from "../../../assets/img/user.png";
import user1 from "../../../assets/img/user1.png";
import user2 from "../../../assets/img/user2.png";
import generateIcon from "../../../assets/img/upload-button-icon.png";
import sunIcon from "../../../assets/img/sunIcon.png";
import moonIcon from "../../../assets/img/moon-icon.png";
import prompt from "../../../assets/img/Prompt.png";
import frame from "../../../assets/img/Frame.png";
import sphere from "../../../assets/img/centered-image.png";
import backgraound1 from "../../../assets/img/bg-1.png";
import backgraound2 from "../../../assets/img/bg-2.png";
import backgraound3 from "../../../assets/img/bg-3.png";
import branchButton from "../../../assets/img/branching-button.png";
import aiButton from "../../../assets/img/ai-button.png";
export default function HomePage() {
  const avatars = [user, user1, user2];
  console.log(sunIcon, "avatars");
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-8  ">
        <div className="left-section flex-col space-y-7">
          <div className="rounded-[24px] p-8 text-white bg-radial-blue max-h-[396px]  w-[100%]">
            <h2
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#bca9f5] to-[#aaaaff] text-4xl
                font-semibold"
            >
              Create <br /> your own <br /> template
            </h2>

            <p className="mt-[160px] font-bold text-lg">14 days trial</p>
            <p className="text-[#ACA0E4] text-base">after – $5/month</p>
          </div>
          <div className="rounded-[24px] p-[32px] pr-[30px] pl-[34px] text-white w-[100%] h-[220px] flex flex-col justify-between bg-radial-blue items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-[62px] font-semibold leading-none bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] text-transparent bg-clip-text">
                20
              </h2>
              <p className="text-[#B2A1FD] text-lg">Top Users</p>
            </div>
            <div className="flex space-x-[-10px]">
              {avatars.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc.src}
                  alt={`user ${index + 1}`}
                  className="w-[56px] h-[56px] rounded-full border-[#191934] object-cover"
                />
              ))}
            </div>
          </div>
          <div className="rounded-[24px] p-[32px] text-white w-[100%] h-[160px] flex flex-col justify-center bg-radial-blue items-center">
            <button className="flex items-center border-[8px] border-[#191934] justify-center space-x-1 w-[178px] h-[72px] rounded-full bg-gradient-to-r from-[#A369FD] to-[#6951F4] text-white font-semibold text-lg shadow-lg">
              <img
                src={generateIcon.src}
                alt={`generate icon`}
                className="w-[24px] h-[24px] object-cover"
              />
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                Generate
              </span>
            </button>
          </div>
        </div>

        <div
          className="col-span-2 centered-section "
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${backgraound1.src})`,
              width: "100%",
              height: "396px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "368px",
              width: "368px",
              zIndex: 999,
              opacity: 1,
            }}
          >
            <img src={sphere.src} alt="" />
          </div>
          <div style={{ display: "flex", gap: "28px", width: "100%" }}>
            <div
              style={{
                backgroundImage: `url(${backgraound2.src})`,
                width: "100%",
                height: "396px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <img
                src={branchButton.src}
                alt=""
                style={{ position: "absolute", bottom: "114px" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  width: "200px",
                  left: "32px",
                }}
              >
                <h2 className="text-[#E6E3FF] font-bold text-lg mb-1">
                  Branching paths
                </h2>
                <p className="text-base text-[#ACA0E4]">
                  Explore multiple prompt directions with branching.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${backgraound3.src})`,
                width: "100%",
                height: "396px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <img
                src={aiButton.src}
                alt=""
                style={{ position: "absolute", bottom: "114px" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  width: "200px",
                  left: "32px",
                }}
              >
                <h2 className="text-[#E6E3FF] font-bold text-lg mb-1">
                  Ai journey
                </h2>
                <p className="text-base text-[#ACA0E4]">
                  Boost your prompt precision with keywords.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section flex-col space-y-7">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="rounded-[24px] p-[42px] text-white bg-radial-blue max-h-[157px] w-[100%]"
          >
            <button
              onClick={toggle}
              className={`w-[132px] bg-[#342d445c] h-[72px] rounded-full flex items-center p-[14px] transition-colors duration-300 `}
            >
              <div
                className={`w-[56px] h-[56px]  rounded-full flex items-center justify-center transform transition-all duration-300 ${
                  isDark ? "translate-x-[0px]" : "translate-x-[57px]"
                }`}
              >
                {isDark ? (
                  <img
                    src={sunIcon.src}
                    alt={`generate icon`}
                    className="w-[56px] h-[60px]  object-cover"
                  />
                ) : (
                  <img
                    src={moonIcon.src}
                    alt={`generate icon`}
                    className="w-[56px] h-[60px]  object-cover"
                  />
                )}
              </div>
            </button>
          </div>
          <div
            className="rounded-[24px] p-8 text-white bg-radial-blue max-h-[211px] w-[100%]"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <h2 className="text-[56px] font-bold bg-gradient-to-r from-[#d2c1ff] to-[#a585ff] text-transparent bg-clip-text">
              25M
            </h2>

            <img src={prompt.src} alt="" />
          </div>
          <div className="rounded-[24px] p-[42px] text-white bg-radial-blue min-h-[412px] w-[100%] relative ">
            {/* <!-- Title --> */}
            <h2 className="text-[#E6E3FF] font-bold text-lg mb-1">
              Prompt Service
            </h2>
            <p className="text-base text-[#ACA0E4]">
              Use pre-made templates to jumpstart creativity.
            </p>
            <img src={frame.src} alt="frame" />
          </div>
        </div>
      </div>
    </>
  );
}
