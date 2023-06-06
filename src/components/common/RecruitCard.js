import { Link } from "react-router-dom";

import ArrowRightSVG from "../../assets/icons/arrowRight";

const RecruitCard = ({ name, icon }) => {
  return (
    <div className="border-gray flex h-[100px] w-full cursor-pointer flex-col items-center justify-center gap-[3px] border-r-[1px]">
      {icon}
      <div>
        <Link to="/">
          <div className="flex items-center gap-1">
            <span className="text-[1em] font-semibold">{name}</span>
            <div>
              <ArrowRightSVG />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecruitCard;
