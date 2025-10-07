import Banner from "../../Banner/Banner";
import App from "../App/App";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  const showData = data.slice(0, 8);

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-4 gap-5">
        {showData.map((app) => (
          <App app={app} />
        ))}
      </div>
    </div>
  );
};

export default Home;
