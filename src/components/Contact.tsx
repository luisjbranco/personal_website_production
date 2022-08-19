import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-auto lg:h-screen bg-[#413F42] text-[#DDDDDD]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#D2042D]">
            Contact
          </p>
          <p className="text-3xl mt-10">
            Submit the form below or send me an email at luisjbrancog@gmail.com
          </p>
        </div>
        <form
          method="post"
          action="https://getform.io/f/304f2081-f6da-4109-ba12-42531e726c08"
          className="flex flex-col w-full mt-[100px] text-[#413F42] text-xl"
        >
          <input
            className="bg-[#E2DCC8]"
            type="text"
            placeholder="Name"
            name="name"
          ></input>
          <input
            className="my-4 p-2 bg-[#E2DCC8]"
            type="email"
            placeholder="Email"
            name="email"
          ></input>
          <textarea
            className="bg-[#E2DCC8] p-2"
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="text-black text-3xl items-center border-2 py-4 px-7 mt-7 mx-auto bg-[#E2DCC8] hover:bg-[#D2042D] hover:border-[#D2042D] hover:text-[#DDDDDD]">
            Get in touch!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
