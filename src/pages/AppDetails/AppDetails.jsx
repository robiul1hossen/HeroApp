import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { appAddToDb, appGetFromDb } from "../../components/utility/storedApp";
import Swal from "sweetalert2";
import { abbreviateNumber } from "js-abbreviation-number";
import RatingChart from "../../components/RatingChart/RatingChart";
import errorImg from "../../assets/App-Error.png";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [installed, setInstalled] = useState([]);

  const filteredData = data.find((app) => Number(app.id) === Number(id));
  // console.log(filteredData.id);
  if (Number(id) !== filteredData?.id) {
    // alert("this app is not available");
    console.log("not found");
  }

  const handleInstall = (id) => {
    Swal.fire({
      title: "App Installed!",
      text: "You clicked the button!",
      icon: "success",
    });

    appAddToDb(id);

    setInstalled((prev) => [...prev, id]);
  };

  useEffect(() => {
    const savedIds = appGetFromDb();
    setInstalled(savedIds);
  }, []);

  const isInstalled = (id) => installed.includes(id);
  return (
    <div className="max-w-11/12 mx-auto">
      {data.find((app) => Number(app.id) === Number(id)) ? (
        <div className="mt-6">
          <div className="flex flex-row gap-10">
            <div className="relative md:static">
              <img
                className="max-w-fit absolute md:static top-0 left-0 md:h-[300px] md:w-[300px] h-[100px] w-[100px] bg-white px-4 py-3 mx-4 my-3 rounded-xl"
                src={filteredData.image}
                alt=""
              />
            </div>
            <div className="flex-1 w-full ">
              <h2 className="text-2xl md:text-3xl font-bold text-[#001931] md:ml-0 ml-28 my-2">
                {filteredData.title}
              </h2>
              <p className="font-semibold text-xl mt-2 mb-7 md:ml-0 ml-28">
                <span className="text-[#627382]">Developed By: </span>
                <span className="bg-gradient-to-t from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">
                  {filteredData.companyName}
                </span>
              </p>
              <hr className="w-[70%] md:w-full border border-slate-300 mb-7 md:ml-0 ml-28" />
              <div className="">
                <div className="flex flex-row gap-5 md:gap-10  items-center">
                  <div className="text-center">
                    <Download className="mx-auto text-yellow-500" />
                    <p className="text-[#001931] my-1">Download</p>
                    <h2 className="text-[#001931] font-medium sm:font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl">
                      {abbreviateNumber(filteredData.downloads, 1)}
                    </h2>
                  </div>
                  <div className="text-center">
                    <Star className="mx-auto text-yellow-500" fill="yellow" />
                    <p className="text-[#001931] my-1">Average Ratings</p>
                    <h2 className="text-[#001931] font-medium sm:font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl">
                      {filteredData.ratingAvg}
                    </h2>
                  </div>
                  <div className="text-center">
                    <ThumbsUp className="mx-auto text-yellow-500" />
                    <p className="text-[#001931] my-1">Total Reviews</p>
                    <h2 className="text-[#001931] font-medium sm:font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl">
                      {filteredData.reviews} K+
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <button
                  disabled={isInstalled(filteredData.id)}
                  onClick={() => handleInstall(filteredData.id)}
                  className="bg-gradient-to-t from-[#632EE3] to-[#9F62F2] rounded-lg w-full md:w-fit px-5 py-3 font-semibold text-white text-xl mt-6 cursor-pointer">
                  {isInstalled(filteredData.id) ? (
                    "Installed"
                  ) : (
                    <span>Install Now ({filteredData.size}MB)</span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full border border-slate-300 my-10" />
          <RatingChart filteredData={filteredData} />
          <div>
            <p className="my-10">
              <span className="text-[#001931] font-semibold text-xl">
                Description:
              </span>
              <span> {filteredData.description}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center my-10">
          <div>
            <img className="w-1/2 mx-auto mb-5" src={errorImg} alt="" />
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              OPPS!! APP NOT FOUND
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
