import { Link } from "react-router";
import errorImg from "../../assets/error-404.png";
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center ">
        <div>
          <img className="mx-auto" src={errorImg} alt="" />
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Oops, page not found!
          </h2>
          <div className="text-center my-10">
            <Link to="/">
              <button className="btn btn-primary btn-outline">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
