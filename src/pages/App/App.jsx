import { abbreviateNumber } from "js-abbreviation-number";
import { ArrowDown, Star } from "lucide-react";
import { useNavigate, useNavigation } from "react-router";
import Spinner from "../../components/Spinner/Spinner";

const App = ({ app }) => {
  const navigate = useNavigate();
  const state = useNavigation();
  const handleDetails = (id) => {
    navigate(`/appDetails/${id}`);
  };
  if (state.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <div
      onClick={() => handleDetails(app.id)}
      className="border border-slate-200 bg-white p-8 rounded-xl cursor-pointer">
      <div className="rounded-lg bg-slate-100 p-8">
        <img
          className="mx-auto w-3/4  hover:scale-115 ease-in-out duration-300 "
          src={app.image}
          alt={app.title}
        />
      </div>
      <p className="text-center font-medium text-xl my-4 ">{app.title}</p>
      <div className="flex justify-between items-center font-medium">
        <span className="flex gap-1 bg-[#f1f5e8] text-[#00D390] px-[10px] py-[6px] rounded-sm">
          <ArrowDown /> {abbreviateNumber(app.downloads, 1)}
        </span>
        <span className="flex gap-1 items-center">
          <Star className="fill-[#FF8811]" stroke="0" />
          {app.ratingAvg}
        </span>
      </div>
    </div>
  );
};

export default App;
