import ArrowRightSVG from "../assets/icons/whiteArrowRight";
import Card from "./common/EventCard";

import { eventList } from "../DB/eventList";

const MyEvent = () => {
  return (
    <section className="pt-[60px]">
      <div className="border-gray flex w-full flex-col justify-center border-b-[1px]">
        <div className="mb-[60px] flex h-[64px] w-auto cursor-pointer items-center justify-center  gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-[17px] font-bold text-white">
          <p>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀</p>
        </div>
        <article>
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="text-[22px] font-bold">
                커리어 성장을 위한 맞춤 이벤트
              </h1>
              <div className="flex cursor-pointer items-center gap-1 text-[14px] font-[600] text-[#8a8a8a]">
                <span>이벤트 전체보기</span>
                <svg fill="gray" className="w-4 h-4" viewBox="0 0 19 19">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-[60px]">
            <div className="flex w-auto gap-4">
              {eventList.map(({ img, label, title }) => (
                <Card img={img} label={label} title={title}></Card>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MyEvent;
