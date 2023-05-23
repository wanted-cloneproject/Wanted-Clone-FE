import { Link } from "react-router-dom";

const RecruitCard = ({ icon, name }) => {
  return (
    <div className="border-gray flex h-[100px] w-full cursor-pointer flex-col items-center justify-center gap-[3px] border-r-[1px]">
      {icon}
      <div>
        <Link to="/">
          <div className="flex items-center gap-1">
            <span className="text-[1em] font-semibold">{name}</span>
            <svg className="h-[4vh] w-[1vw]" viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecruitCard;
