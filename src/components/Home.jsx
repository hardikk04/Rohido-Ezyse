import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Nav from "./Nav";
import Button from "./Button";
import OfferCard from "./OfferCard";
import AboutCard from "./AboutCard";
import Footer from "./Footer";

const Home = () => {
  useGSAP(() => {
    gsap.from("video", {
      width: "75%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".home-video",
        start: "top 70%",
        end: "top 0%",
        scrub: 1,
      },
    });

    gsap.to(".card2", {
      top: "50%",
      transform: "translateY(-50%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".offer-main",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(".about-container", {
      transform: `translateX(-210vw)`,
      scrollTrigger: {
        scroller: "body",
        trigger: ".about",
        start: "top 0%",
        end: "top -250%",
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <>
      <Nav />
      <section className="px-[2vw] py-[8vw] text-center flex justify-center">
        <div className="home-hero flex flex-col items-center">
          <div>
            <h5 className="text-[#5A5A5A] font-[500]">
              Find your suitable room for meeting
            </h5>
          </div>
          <div className="w-[90%] leading-[1.4]">
            <h1>
              We facilitate and book the conference rooms with
              <span className="text-[5.5vw] text-[#377691] font-medium relative">
                &nbsp;Ezyse
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
          <div className="mt-[2vw]">
            <Button title="Book Now" c="text-[1.4vw]"></Button>
          </div>
        </div>
      </section>
      <section className="w-full home-video h-screen flex justify-center">
        <video
          className="h-full w-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          src="https://videos.pexels.com/video-files/7648343/7648343-hd_1920_1080_30fps.mp4"
        ></video>
      </section>
      <section className="offers w-full pt-[5vw]">
        <div className="offer-dets flex flex-col items-center">
          <div className="leading-[1.4]">
            <h2>
              What we offer at
              <span className="text-[3.5vw] text-[#377691] font-medium relative inline-block">
                &nbsp;Ezyse
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
        <div className="offer-main w-full h-screen relative flex justify-center">
          <div className="w-[80%] relative overflow-hidden flex justify-center items-center">
            <OfferCard
              absolute={false}
              para="To provide companies and individuals with access to beautifully
          designed conference meeting rooms, supportive & collaborative
          environment."
              title="We provide you Conference Room Booking"
              img="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></OfferCard>
            <OfferCard
              c="card2 bg-[#E8E8FF]"
              para="To provide companies and individuals with access to beautifully
          designed conference meeting rooms, supportive & collaborative
          environment."
              title="We provide you Conference Room Booking"
              img="https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></OfferCard>
          </div>
        </div>
      </section>
      <section className="about w-full overflow-hidden h-screen relative">
        <div className="about-container h-full w-full relative flex py-[4vw]">
          <h2 className="text-[26vw] text-[#5A5A5A] whitespace-nowrap absolute left-[0] top-1/2 -translate-y-1/2">
            What People Say About Us
          </h2>
          <div className="about-elem h-full w-screen px-[2vw] shrink-0">
            <div className="h-1/2 w-full flex justify-end">
              <AboutCard bg="bg-green-50"></AboutCard>
            </div>
            <div className="h-1/2 w-full">
              <AboutCard bg="bg-blue-50"></AboutCard>
            </div>
          </div>
          <div className="about-elem h-full w-screen px-[2vw] shrink-0">
            <div className="h-1/2 w-full flex justify-end">
              <AboutCard bg="bg-blue-50"></AboutCard>
            </div>
            <div className="h-1/2 w-full">
              <AboutCard bg="bg-red-50"></AboutCard>
            </div>
          </div>
          <div className="about-elem h-full w-screen px-[2vw] shrink-0">
            <div className="h-1/2 w-full flex justify-end">
              <AboutCard bg="bg-red-50"></AboutCard>
            </div>
            <div className="h-1/2 w-full">
              <AboutCard bg="bg-green-50"></AboutCard>
            </div>
          </div>
        </div>
      </section>
      <section className="client w-full bg-[#EFFAFE] px-[2vw]">
        <div className="client-dets flex flex-col items-center">
          <div className="leading-[1.4]">
            <h2>Our Clients</h2>
          </div>
          <p className="text-[#484848] w-[70%] text-center ">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-between py-[3vw]">
          <img className="object-contain" src="/images/client1.png" alt="" />
          <img className="object-contain" src="/images/Logo.png" alt="" />
          <img className="object-contain" src="/images/Logo-1.png" alt="" />
          <img className="object-contain" src="/images/Logo-2.png" alt="" />
          <img className="object-contain" src="/images/Logo-3.png" alt="" />
          <img className="object-contain" src="/images/Logo-4.png" alt="" />
          <img className="object-contain" src="/images/Logo.png" alt="" />
          <img className="object-contain" src="/images/Logo-1.png" alt="" />
          <img className="object-contain" src="/images/Logo-2.png" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
