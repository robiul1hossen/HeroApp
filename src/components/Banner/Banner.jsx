import hero from "../../assets/hero.png";
import playStore from "../../assets/playStore.png";
import appStore from "../../assets/appStore.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div>
      <div className="pt-20 bg-[#f5f5f5]">
        <div className="text-center ">
          <h1 className="font-[parata] text-[#001931] text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold md:font-bold">
            We Build
          </h1>
          <h1 className="font-[parata] text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold md:font-bold">
            <span className="bg-gradient-to-t from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">
              Productive
            </span>
            <span className="text-[#001931] font-[parata]"> Apps</span>
          </h1>
          <p className="text-[#627382] md:w-1/2 px-5 md:px-0 mx-auto mt-4 mb-10">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-2 justify-center mb-10">
            <Link to="https://play.google.com/store/apps">
              <button className="btn">
                <img className="w-[30px] h-[30px]" src={playStore} alt="" />
                <span>Play Store</span>
              </button>
            </Link>

            <Link to="https://www.apple.com/app-store/">
              <button className="btn">
                <img className="w-[30px] h-[30px]" src={appStore} alt="" />
                <span>Play Store</span>
              </button>
            </Link>
          </div>
        </div>
        <img className="mx-auto md:w-1/2 px-5" src={hero} alt="" />
      </div>
      <div className="bg-gradient-to-t from-[#632EE3] to-[#9F62F2] text-center py-20">
        <h2 className="font-[parata] font-semibold md:font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center">
          <div className="border border-slate-200 py-5 px-10 rounded-lg md:border-none">
            <p className="text-white">Total Downloads</p>
            <h2 className="text-white font-bold md:font-extrabold lg:font-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl my-4">
              29.6M
            </h2>
            <p className="text-white">21% more than last month</p>
          </div>
          <div className="border border-slate-200 py-5 px-10 rounded-lg md:border-none">
            <p className="text-white">Total Reviews</p>
            <h2 className="text-white font-bold md:font-extrabold lg:font-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl my-4">
              906K
            </h2>
            <p className="text-white">46% more than last month</p>
          </div>
          <div className="border border-slate-200 py-5 px-16 rounded-lg md:border-none">
            <p className="text-white">Active Apps</p>
            <h2 className="text-white font-bold md:font-extrabold lg:font-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl my-4">
              132+
            </h2>
            <p className="text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
