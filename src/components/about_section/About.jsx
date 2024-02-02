const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div  data-aos = "fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">🧑‍💻</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Hello, i’m Soumyasis!
              <br />
              <br />
              I'm an Indian front-end developer who learned everything on my own.
               I am capable of starting from scratch and creating responsive websites
                that are contemporary and user-friendly.

              <br />
              <br />
              My interest has been creating websites using my expertise and creativity for more than a year. I have been assisting a number of customers in creating an internet presence. I make it a point to become knowledgeable about the newest frameworks and technologies.

            </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="https://www.linkedin.com/in/soumyasis-das-714609224/"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div  data-aos = "fade-left" className=" mx-auto">
            <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;