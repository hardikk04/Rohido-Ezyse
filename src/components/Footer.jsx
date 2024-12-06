import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between px-[2vw] pt-[8vw] pb-[2vw]">
      <div className="footer-left w-[40%]">
        <div className="flex items-center gap-[.5vw] mb-[1vw]">
          <div className="logo h-[2.5vw] w-[2.5vw] rounded-full bg-[#BEDBE8]"></div>
          <h5 className="font-bold">Ezyse</h5>
        </div>
        <p className="text-[#282828] text-[1.2vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          consequatur mollitia, similique placeat accusantium voluptatem
          cupiditate voluptatum quaerat error
        </p>
        <div className="flex gap-[1vw] mt-[1vw]">
          <i className="text-[1.5vw] ri-instagram-line"></i>
          <i className="text-[1.5vw] ri-linkedin-box-fill"></i>
          <i className="text-[1.5vw] ri-twitter-x-fill"></i>
        </div>
      </div>
      <div className="footer-right h-full flex gap-[6vw]">
        <div className="footer-right-elem">
          <h6 className="font-bold">Company</h6>
          <div className="flex flex-col gap-[1vw] mt-[1vw]">
            <Link>
              <h6>About</h6>
            </Link>
            <Link>
              <h6>How it Works</h6>
            </Link>
            <Link>
              <h6>Term</h6>
            </Link>
            <Link>
              <h6>Privacy Policy</h6>
            </Link>
          </div>
        </div>
        <div className="footer-right-elem">
          <h6 className="font-bold">More</h6>
          <div className="flex flex-col gap-[1vw] mt-[1vw]">
            <Link>
              <h6>Documentation</h6>
            </Link>
            <Link>
              <h6>License</h6>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
