import Card from "components/admincard/index.jsx";
import { FaTrophy } from "react-icons/fa";
import ScoreIcon from "assets/icons/ScoreIcon.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseCard = ({ title, image, level, price, chaptersnumber, id, onDelete }) => {

  
  const handleDeleteCourse = async () => {
    try {
      await onDelete(id);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <Card

    >
      <div className="h-full w-[25rem] lg:w-full lg:px-10">
        <div className="relative w-full flex justify-center items-center">
          <img
            src={image}
            className="mb-3 h-56 w-full rounded-xl object-cover 3xl:h-full 3xl:w-full "
            style={{ height: '200px', width: '300px' }}
            alt=""
          />
        </div>

        <div className="p-![18px] mb-6 flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div>
            <p className="text-lg font-bold dark:text-black ">{title}</p>
          </div>
        </div>
        <div className="mt-1  mb-6  flex flex-col md:flex-row justify-between">
          <div className="flex  items-center justify-center gap-3">
            <p className="text-md font-medium text-black"> chapters</p>
            <p className="text-md font-semibold  dark:text-black">{chaptersnumber}</p>
          </div>
          <div className="flex  items-center justify-center gap-3">
            <p className="text-md font-medium text-black">price</p>
            <p className="text-md font-semibold  dark:text-black">{price}</p>
          </div>
          <div className="flex  items-center justify-center gap-3">
            <FaTrophy size={20} color="silver" />
            <p className="text-md font-semibold  dark:text-black">{level}</p>
          </div>
        </div>
        <div className="mt-1  mb-4 flex justify-between">


          <button className="flex flex-col md:flex-row  items-center justify-start gap-2 rounded-[10px] bg-[#000000] py-1 pl-6 pr-2 text-center text-sm font-medium capitalize leading-tight text-white"
            onClick={() => handleDeleteCourse()}>  Delete   <MdOutlineKeyboardArrowRight size={20} />
          </button>

          <div></div>
          <div>
            <Link to={`coursead/${id}`}>

              <button className="flex items-center justify-start gap-2 h-[50px] rounded-[10px] bg-[#000000] py-1  pl-6 pr-2  text-center text-sm  font-medium capitalize leading-tight text-white">
                Update
                <MdOutlineKeyboardArrowRight size={20} />
              </button>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="relative">
              <img src={ScoreIcon} width={50} alt="Score Icon" />
              <p className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 transform text-black font-bold">
                1
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;