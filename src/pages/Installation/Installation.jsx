import React, { useEffect, useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";

import { useLoaderData, useNavigation } from "react-router";
import {
  appGetFromDb,
  appRemoveFromDb,
} from "../../components/utility/storedApp";
import { Download, Star } from "lucide-react";
import Spinner from "../../components/Spinner/Spinner";
import Swal from "sweetalert2";

const Installation = () => {
  const data = useLoaderData();
  const state = useNavigation();
  const [install, setInstall] = useState([]);
  const handleSortAscending = () => {
    const sorted = [...install].sort((a, b) => a.downloads - b.downloads);
    setInstall(sorted);
  };
  const handleSortDescending = () => {
    const sorted = [...install].sort((b, a) => a.downloads - b.downloads);
    setInstall(sorted);
  };
  const handleUninstall = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Uninstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        appRemoveFromDb(id);
        setInstall((prev) => prev.filter((app) => app.id !== id));
        Swal.fire({
          title: "Uninstall!",
          text: "Your app uninstalled successfully.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const storedId = appGetFromDb();
    const convertedId = storedId.map((id) => parseInt(id));
    const installedApp = data.filter((app) => convertedId.includes(app.id));
    setInstall(installedApp);
  }, [data]);

  if (state.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="text-[#001931] font-[parata] mt-10 font-semibold md:font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Your Installed Apps
        </h2>
        <p className="text-[#627382] text-xl w-1/2 mx-auto mt-4 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2>{install.length} Apps Installed</h2>
        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
        {/* For TSX uncomment the commented types below */}
        <button
          className="btn shadow-lg"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
          Sort By Downloads
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
          <li>
            <a onClick={handleSortDescending}>High to Low</a>
          </li>
          <li>
            <a onClick={handleSortAscending}>Low to High</a>
          </li>
        </ul>
      </div>
      <div>
        {install.map((app) => (
          <div key={app.id} className="my-3 ">
            <div className="flex flex-col md:flex-row justify-between md:items-center bg-white rounded-lg p-4">
              <div className="flex flex-col md:flex-row gap-10 md:items-center">
                <div>
                  <img className="w-[70px] h-[70px]" src={app.image} alt="" />
                </div>
                <div>
                  <h2 className="text-[#001931] font-medium text-xl mb-4">
                    {app.title}
                  </h2>
                  <div className="flex gap-5 items-center">
                    <p className="flex gap-1 items-center text-[#00D390] text-sm">
                      <Download /> {abbreviateNumber(app.downloads, 1)}
                    </p>
                    <p className="text-[#FF8811] flex gap-1 text-sm">
                      <Star fill={`#FF8811`} /> {app.ratingAvg}
                    </p>
                    <p className="text-[#627382] text-sm">
                      Size: {app.size} MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-[#00D390] px-5 py-3 font-semibold text-white text-xl mt-6 cursor-pointer rounded-lg">
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
