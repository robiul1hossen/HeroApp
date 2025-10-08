import { ArrowDown, Star } from "lucide-react";
import { useNavigate } from "react-router";

const App = ({ app }) => {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/appDetails/${id}`);
  };
  return (
    <div
      onClick={() => handleDetails(app.id)}
      className="border border-slate-200 bg-white p-5 rounded-xl cursor-pointer">
      <img
        className="mx-auto w-3/4 rounded-lg  bg-slate-100 p-8 mt-4"
        src={app.image}
        alt={app.title}
      />
      <p className="text-center font-medium text-xl my-4 ">{app.title}</p>
      <div className="flex justify-between items-center font-medium">
        <span className="flex gap-1 bg-[#f1f5e8] text-[#00D390] px-[10px] py-[6px] rounded-sm">
          <ArrowDown /> {app.downloads}
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
