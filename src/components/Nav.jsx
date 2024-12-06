import Button from "./Button";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white flex justify-between items-center px-[2vw] py-[.5vw] border-b">
      <div className="nav-left flex justify-center items-center gap-[.5vw]">
        <div className="logo h-[2.5vw] w-[2.5vw] rounded-full bg-[#BEDBE8]"></div>
        <h6 className="font-bold">Ezyse</h6>
      </div>
      <div className="nav-right flex items-center justify-center gap-[2vw]">
        <div className="flex items-center">
          <h6 className="font-[500]">Products</h6>
          <i className="ri-arrow-down-s-line"></i>
        </div>
        <div className="flex items-center">
          <h6 className="font-[500]">Products</h6>
          <i className="ri-arrow-down-s-line"></i>
        </div>
        <div className="flex items-center">
          <h6 className="font-[500]">Products</h6>
          <i className="ri-arrow-down-s-line"></i>
        </div>
        <div className="nav-line h-[3vh] w-[1px] bg-[#A39C95]"></div>
        <div className="flex gap-[1vw]">
          <Button bg={false} title="Login"></Button>
          <Button title="Book a demo"></Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
