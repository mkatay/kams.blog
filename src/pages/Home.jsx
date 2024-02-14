import classNames from "classnames";

import motto from '../assets/motto.jpg'

import me from '../assets/me.jpg'
import { AnimatedText } from "../components/AnimatedText";



const discover = [
  {
    digit: "240k+",
    field: "Total Sale",
  },
  {
    digit: "100k+",
    field: "Auctions",
  },
  {
    digit: "240k+",
    field: "Artists",
  },
];





const Button = ({
  size,
  className,
  color,
  font,
  icon,
  type,
  onClick,
  label,
  endIcon,
  startIcon,
  endIconClassName,
  startIconClassName,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        className,
        "flex items-center justify-center",
        size ? size : "",
        color ? color : "bg-blue",
        font ? font : "font-[500] tracking-tight text-white"
      )}
      {...props}
    >
      {startIcon && (
        <div className={classNames(startIconClassName || "")}>{startIcon}</div>
      )}
      <div className="relative">
        <div className="flex items-center justify-center gap-3">
          <div className="label">{label}</div>
          {icon && <div>{icon}</div>}
        </div>
      </div>
      {endIcon && (
        <div className={classNames(endIconClassName || "")}>{endIcon}</div>
      )}
    </button>
  );
};

export const Home = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#2B2B2B] font-Montserrat lg:gap-20">
 
      <div className=" mt-[100px] flex flex-col items-center gap-10 px-[15px] capitalize sm:max-w-[590px] md:max-w-[690px] md:gap-20 md:px-0 lg:max-w-[900px] lg:gap-[100px] xl:max-w-[1050px] min-h-screen">
        <div className=" flex w-full flex-col justify-between gap-[30px] sm:flex-row">
          <div className="flex flex-col gap-5 text-start text-white md:max-w-[330px] md:gap-[30px] lg:max-w-[510px]">
            <div className=" text-start text-[28px] font-semibold capitalize leading-[39px] md:text-[38px] md:leading-[45px] lg:text-[67px] lg:leading-[73px]">
            Ízek & Élmények & Receptek<br></br>    <AnimatedText text='Utazások & Beszámolók'/>
            </div>
            <div className="-mt-[10px] text-start text-base font-normal leading-[22px] md:text-base md:leading-[22px] normal-case">          
            Ez az online kis sarkam, ahol örömmel osztom meg veletek mindazt, ami inspirál engem, és reményeim szerint titeket is. Itt találhattok mindenféle jó tanácsot, recepteket, élménybeszámolókat és még sok minden mást, amit a mindennapjaim során felfedezek.<br/>Szeretettel, KAM !
        
            </div>
            <div className="hidden gap-[30px] sm:flex sm:flex-col">
              <Button
                startIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                
                  
                }
                className="flex max-w-[224px] items-center justify-center gap-[15px] whitespace-nowrap rounded-[20px] py-[5px] lg:py-[9px]"
                font="font-semibold text-base leading-[22px]"
                color="bg-[#A259FF]"
                label="Csatlakozz hozzám"
              />
              <div className="flex w-full justify-between gap-[30px]">
                {discover.map((data, index) => {
                  return (
                    <div key={index} className="w-full max-w-[150px]">
                      <div className="!font-spacemono text-[22px] font-bold md:text-[22px] md:leading-[35px] lg:leading-[39px]">
                        {data.digit}
                      </div>
                      <div className="text-base font-normal leading-[38px] md:text-base lg:text-[24px]">
                        {data.field}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="max-h-[540px] w-full rounded-[20px] text-white md:max-w-[330px] lg:max-w-[510px]">
            <img   src={motto}     alt="motto"     className="w-full"         />
            <div className="flex  flex-col justify-start gap-2.5 rounded-b-[20px] bg-[#3B3B3B] px-5 py-[22px]">
              <div className="flex text-[12px] font-semibold leading-[30px] italic justify-center">
               <blockquote>"Life begins at the end of your confort zone"</blockquote>
               
              </div>
              <div className="flex items-center justify-end gap-1">
                <img className="w-10  rounded " src={me} alt="KAM"></img>
                
              </div>
            </div>
          </div>
          <div className="flex max-w-full flex-col gap-[30px] rounded-[20px] text-white sm:hidden">
            <a
              href="#_"
              className=" flex max-w-full items-center justify-center gap-[15px] whitespace-nowrap rounded-[20px] bg-[#A259FF] py-[15px] lg:py-[19px]"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

              <button className="text-base font-semibold leading-[22px]">
                Csatlakozz hozzám
              </button>
            </a>
            <div className="xs:px-[5%] flex justify-between">
              {discover.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="text-[22px] font-bold md:text-[22px] md:leading-[35px] lg:leading-[39px]">
                      {data.digit}
                    </div>
                    <div className="text-base font-normal leading-[38px] md:text-base lg:text-[24px]">
                      {data.field}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};
