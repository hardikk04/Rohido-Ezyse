import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "./Button";
import FeaturesCard from "./FeaturesCard";
import WorkCard from "./WorkCard";

const Booking = () => {
  useGSAP(() => {
    gsap.to(".work-card-0", {
      rotateX: 90,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".work-card-0",
        start: "top 30%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.to(".work-card-1", {
      rotateX: 90,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".work-card-1",
        start: "top 30%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.to(".work-card-2", {
      rotateX: 90,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".work-card-2",
        start: "top 30%",
        end: "top -20%",
        scrub: 1,
        // markers: true,
      },
    });
  });

  return (
    <>
      <section className="px-[2vw] py-[8vw] pb-[6vw] text-center flex justify-center">
        <div className="home-hero flex flex-col items-center">
          <div className="w-[90%] leading-[1.4]">
            <h1>
              Optimize your meeting room
              <span className="text-[5.5vw] text-[#377691] font-medium relative">
                &nbsp;utilization
                <svg
                  className="absolute right-0"
                  width="203"
                  height="12"
                  viewBox="0 0 203 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.38605 9.37421C82.0801 0.118738 120.711 1.09308 200.406 9.37414"
                    stroke="black"
                    strokeWidth="3.64602"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>
          <p className="text-[#484848] mt-[2vw]">
            Foster seamless collaboration with Esyse intuitive Meeting Room
            Management Solution.
          </p>
          <div className="mt-[2.5vw]">
            <Button title="Book a demo" c="text-[1.4vw]"></Button>
          </div>
        </div>
      </section>
      <section className="px-[2vw] w-full h-screen flex justify-center">
        <img className="h-full w-full" src="/images/Group.png" alt="" />
      </section>
      <section className="w-full py-[6vw] px-[2vw]">
        <div className="features-dets flex flex-col items-center">
          <div className="leading-[1.4]">
            <h2>
              Key
              <span className="text-[3.5vw] text-[#377691] relative inline-block font-medium">
                &nbsp;Features
                <svg
                  className="absolute right-0"
                  width="203"
                  height="12"
                  viewBox="0 0 203 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.38605 9.37421C82.0801 0.118738 120.711 1.09308 200.406 9.37414"
                    stroke="black"
                    strokeWidth="3.64602"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-[#484848] w-[70%] text-center mt-[2vw]">
            Bolstering your enterprise with digital solutions that enhance
            employee safety, safeguard company assets, and elevate productivity.
          </p>
        </div>
        <div className="features-cards w-full flex flex-wrap justify-between mt-[5vw] gap-[3vw]">
          {[...Array(6)].map((data, index) => (
            <FeaturesCard key={index} />
          ))}
        </div>
      </section>
      <section className="w-full px-[2vw]">
        <div className="work-dets flex flex-col items-center">
          <div className="leading-[1.4]">
            <h2>
              How it
              <span className="text-[3.5vw] text-[#377691] relative inline-block font-medium">
                &nbsp;works
                <svg
                  className="absolute right-0"
                  width="203"
                  height="12"
                  viewBox="0 0 203 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.38605 9.37421C82.0801 0.118738 120.711 1.09308 200.406 9.37414"
                    stroke="black"
                    strokeWidth="3.64602"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-[#484848] w-[70%] text-center mt-[2vw]">
            Bolstering your enterprise with digital solutions that enhance
            employee safety, safeguard company assets, and elevate productivity.
          </p>
        </div>
        <div className="work-hero flex h-[50vh] mt-[6vw]">
          <div className="work-left w-[48%] flex items-center">
            <div>
              <h3 className="font-medium">Create Rooms</h3>
              <p className="text-[#484848] leading-[1.3]">
                Create rooms on Ezyse web portal and provide details such as the
                meeting room's name, capacity details, bookable time, etc.
              </p>
            </div>
          </div>
          <div className="work-right w-[48%] h-full overflow-hidden">
            <img
              className="h-full w-full object-contain"
              src="/images/cal.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="booking-work w-full px-[2vw] flex flex-col gap-[4vw] justify-center py-[6vw]">
        {[...Array(3)].map((data, index) => (
          <WorkCard key={index} index={index} />
        ))}
      </section>
      <section className="qr w-full px-[2vw] flex h-[40vh] gap-[2vw]">
        <div className="qr-left w-[22%] h-full overflow-hidden">
          <img
            className="h-full w-full object-contain"
            src="/images/qr.png"
            alt=""
          />
        </div>
        <div className="qr-right w-[78%] h-full bg-[#6CBCDE] rounded-[1vw] flex justify-center items-center flex-col">
          <p className="text-white font-thin w-[40%] text-center">
            <span className="font-bold">Scan QR</span> to Try Esyse before
            booking a demo with us? or
            <span className="font-bold"> Click on Try Now</span> to Get a demo
          </p>
          <div className="mt-[1.5vw]">
            <Button title="Try Now" bg={false}></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
