import React from 'react'
const socialicon=['🤩','🚀']

export const Footer = () => {
  return (
    <div className=" flex max-h-fit w-full flex-col items-start justify-center gap-5 bg-[#3B3B3B] pb-[20px] pl-[5%] text-start sm:items-center lg:px-0">
    <div className="w-full  pr-2.5 sm:max-w-[690px] md:max-w-[900px] md:px-5 xl:max-w-[1050px]">
      <div className="flex flex-col gap-[30px] pt-[40px] md:flex-row md:justify-between">
        <div className="flex flex-col gap-[25px] text-[#CCCCCC]">
          <a href="#_">
            <div>
              <img src={"/assets/crypto/logo.svg"} alt="img" />
            </div>
          </a>
          <div className="flex flex-col gap-5">
            <div className=" lg:max-w-[238px]">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className="flex flex-col gap-[15px]">
              <div>Join our community</div>
              <div className="flex gap-3">
                {socialicon.map((data, index) => {
                  return (
                    <a key={index} href={data.link}>
                      <img src={data.icon} alt={data.alt} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-[240px] flex-col gap-[25px]">
          <div className="text-[22px] font-bold leading-[35px] text-white">
            Explore
          </div>
      
        </div>
        <div className="lg flex w-full flex-col gap-[25px] md:max-w-[420px]">
          <div className="!font-spacemono text-[22px] font-bold capitalize leading-[35px] text-white">
            Join our weekly digest
          </div>
          <div className="flex flex-col gap-5 text-base font-normal leading-[22px] text-[#CCCCCC]">
            <div className="lg:max-w-[330px]">
              Get exclusive promotions & updates straight to your inbox.
            </div>


            <div className="flex flex-col gap-4 sm:hidden">
              <div className="w-full max-w-[290px] rounded-[20px] border border-[#A259FF] bg-white py-[12px] text-base text-black">
                <button className="px-5">Enter Your Email Address</button>
              </div>
              <a href="#_">
                <div className="flex max-w-[290px] items-center justify-center gap-[15px] rounded-[20px] bg-[#A259FF] py-[12px] text-base font-semibold leading-[22px]">
                  <img src={"/assets/crypto/email.svg"} alt="subscribe" />
                  <button className="text-white">Subscribe</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-[20px] w-full border border-[#858584]"></div>
      <div className="flex w-full justify-start text-center text-[#CCCCCC] sm:whitespace-nowrap sm:text-start">
        Ⓒ KAM 2024
      </div>
    </div>
  </div>
  )
}
