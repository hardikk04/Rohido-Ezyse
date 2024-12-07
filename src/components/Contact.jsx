import Nav from "./Nav";
import Footer from "./Footer";
import Button from "./Button";
import ContactDets from "./ContactDets";

const Contact = () => {
  return (
    <>
      <Nav />
      <section className="contact w-full h-screen px-[2vw] pt-[6vw] pb-[2vw] flex justify-between">
        <div className="contact-left bg-white box-shadow p-[2vw] rounded-[1.5vw] h-full w-[48%]">
          <h2 className="leading-none">Get in Touch</h2>
          <div className="line w-full h-[1px] bg-[#C6C5C5] mt-[1vw]"></div>
          <form action="" className="pt-[2vw] flex flex-col gap-[1.5vw]">
            <div className="w-full">
              <span className="font-medium block">Name</span>
              <input
                className="bg-[#F7F7F7] outline-none w-full p-[1vw] rounded-md"
                placeholder="NAME"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="w-full">
              <span className="font-medium block">Email</span>
              <input
                className="bg-[#F7F7F7] outline-none w-full p-[1vw] rounded-md"
                placeholder="EMAIL"
                type="text"
                name="email"
                required
              />
            </div>
            <div className="w-full">
              <span className="font-medium block">Message</span>
              <textarea
                className="bg-[#F7F7F7] outline-none w-full p-[1vw] rounded-md resize-none h-[10vw]"
                name="message"
              ></textarea>
            </div>
            <div>
              <Button title="Submit"></Button>
            </div>
          </form>
        </div>
        <div className="contact-right w-[49%] h-full flex flex-col gap-[2vw] ">
          <div className="contact-right-top h-[55%] w-full rounded-[1.5vw] box-shadow bg-white overflow-hidden py-[1vw]">
            <img
              className="h-full w-full object-contain"
              src="/images/contact.png"
              alt=""
            />
          </div>
          <div className="contact-right-bottom h-[45%] w-full rounded-[1.5vw] box-shadow bg-white p-[2vw] flex flex-col justify-between">
            <ContactDets
              title="Email"
              para="ezyse@gmail.com"
              ic="ri-message-3-line"
            />
            <ContactDets
              title="Phone"
              para="+91 9836781245"
              ic="ri-phone-fill"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
