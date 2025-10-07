import { ArrowDown, Star } from "lucide-react";

const App = ({ app }) => {
  return (
    <div className="border border-slate-200 bg-white p-5 rounded-xl ">
      <img
        className="mx-auto w-1/2 rounded-lg border border-slate-300 bg-gray-200"
        src={app.image}
        alt=""
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
