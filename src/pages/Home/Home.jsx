import Banner from "../../components/Banner/Banner";
import App from "../App/App";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const showData = data.slice(0, 8);

  return (
    <div>
      <Banner />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 max-w-11/12 mx-auto">
          {showData.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>
        <div className="text-center my-10">
          <Link to="/apps">
            {" "}
            <button className="btn btn-outline btn-primary">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
