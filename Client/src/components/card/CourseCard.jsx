import Card from "components/card";
import { FaTrophy } from "react-icons/fa";
import ScoreIcon from "assets/icons/ScoreIcon.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseCard = ({
  extra,
  title,
  image,
  difficulty,
  id,
  chapters,
  instructor,
  progress,
  lessons,
  price,
  level,
  userpic,
}) => {
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative flex w-full items-center justify-center">
          <img
            src={image}
            className="mb-3 h-56 w-full rounded-xl object-cover 3xl:h-full 3xl:w-full "
            style={{ height: "200px", width: "300px" }}
            alt=""
          />
        </div>

        <div className="p-![18px] mb-6 flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div>
            <p className="text-lg font-bold dark:text-white ">{title}</p>
          </div>
        </div>
        <div className="mb-6  mt-1  flex justify-between">
          <div className="flex items-center justify-center gap-3">
            <p className="text-md font-medium">Chapters</p>
            <p className="text-md font-semibold  dark:text-white">{chapters}</p>
          </div>
          <div className="flex  items-center justify-center gap-3">
            <p className="text-md font-medium">Price</p>
            <p className="text-md font-semibold  dark:text-white">{price}</p>
          </div>
          <div className="flex  items-center justify-center gap-3">
            <FaTrophy size={20} color="silver" />
            <p className="text-md font-semibold  dark:text-white">{level}</p>
          </div>
        </div>
        <div className="mb-4  mt-1 flex justify-between">
          <Link to={`/courseDetails/${id}`}>
            <button className="flex items-center justify-start gap-2 rounded-[10px] bg-[#000000] py-2.5 pl-4 pr-2 text-center text-sm font-medium capitalize leading-tight text-white">
              Start Course <MdOutlineKeyboardArrowRight size={20} />
            </button>
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="relative">
              <img src={ScoreIcon} width={50} alt="Score Icon" />
              <p className="absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg font-bold dark:text-orange-400">
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
