import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { appAddToDb, appGetFromDb } from "../../components/utility/storedApp";
import Swal from "sweetalert2";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [installed, setInstalled] = useState([]);

  const filteredData = data.find((app) => Number(app.id) === Number(id));

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
      <div className="flex gap-10">
        <div>
          <img
            className="h-[300px] w-[300px] bg-white px-4 py-3 mx-4 my-3 rounded-xl"
            src={filteredData.image}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001931] my-2">
            {filteredData.title}
          </h2>
          <p className="font-semibold text-xl mt-2 mb-7">
            <span className="text-[#627382]">Developed By: </span>
            <span className="bg-gradient-to-t from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">
              {filteredData.companyName}
            </span>
          </p>
          <hr className="w-full border border-slate-300 mb-7" />
          <div>
            <div className="flex gap-10 items-center">
              <div className="text-center">
                <Download className="mx-auto text-yellow-500" />
                <p className="text-[#001931] my-1">Download</p>
                <h2 className="text-[#001931] font-extrabold text-4xl">
                  {filteredData.downloads}
                </h2>
              </div>
              <div className="text-center">
                <Star className="mx-auto text-yellow-500" fill="yellow" />
                <p className="text-[#001931] my-1">Average Ratings</p>
                <h2 className="text-[#001931] font-extrabold text-4xl">
                  {filteredData.ratingAvg}
                </h2>
              </div>
              <div className="text-center">
                <ThumbsUp className="mx-auto text-yellow-500" />
                <p className="text-[#001931] my-1">Total Reviews</p>
                <h2 className="text-[#001931] font-extrabold text-4xl">
                  {filteredData.reviews} K+
                </h2>
              </div>
            </div>
          </div>
          <button
            disabled={isInstalled(filteredData.id)}
            onClick={() => handleInstall(filteredData.id)}
            className="bg-[#00D390] px-5 py-3 font-semibold text-white text-xl mt-6 cursor-pointer">
            {isInstalled(filteredData.id) ? "Installed" : "Install"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
