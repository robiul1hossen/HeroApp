import Banner from "../../components/Banner/Banner";
import Spinner from "../../components/Spinner/Spinner";
import App from "../App/App";
import { Link, useLoaderData, useNavigation } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const showData = data.slice(0, 8);
  const state = useNavigation();

  if (state.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <div>
        <div className="text-center mt-20">
          <h2 className="text-[#001931] font-semibold md:font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Trending Apps
          </h2>
          <p className="text-[#627382] text-xl w-1/2 mx-auto mt-4 mb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 max-w-11/12 mx-auto">
          {showData.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>
        <div className="text-center my-10">
          <Link to="/apps">
            <button className="btn btn-outline btn-primary">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
