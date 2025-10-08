import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import App from "../App/App";
import Spinner from "../../components/Spinner/Spinner";

const Apps = () => {
  const data = useLoaderData();
  const state = useNavigation();
  const [search, setSearch] = useState([]);

  const handleChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    const searchedData = data.filter((app) =>
      app.title.toLowerCase().includes(userInput)
    );
    setSearch(searchedData);
  };
  useEffect(() => {
    setSearch(data);
  }, [data]);

  if (state.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="text-center">
        <h2 className="text-[#001931] font-semibold md:font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our All Applications
        </h2>
        <p className="text-[#627382] text-xl w-1/2 mx-auto mt-4 mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between mb-6">
        <h2 className="font-semibold text-2xl">({search.length}) Apps Found</h2>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Find Apps"
          className="input focus:outline-none outline-none border-none focus:border-none shadow-xl"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {search.map((app) => (
          <App app={app} key={app.id} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
