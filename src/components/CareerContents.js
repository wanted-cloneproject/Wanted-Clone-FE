import Card from "./common/CareerCard";

import TitleIconSVG from "../assets/icons/titleIcon";
import TagMoreSVG from "../assets/icons/tagMore";
import ArrowDownSVG from "../assets/icons/arrowDown";

import { cardData } from "../DB/cardDataList";

const CareerCard = () => {
  const menuData = [
    "IT/기술",
    "리더십",
    "회사생활",
    "조직문화",
    "취업/이직",
    "커리어고민",
    "라이프스타일",
    "인간관계",
    "디자인",
  ];

  const MenuBtn = ({ label }) => {
    return (
      <button className="border-gray flex justify-center rounded-full border-[1px] border-solid px-[22px] py-[9px] text-[14px] font-medium text-[#8a8a8a] hover:bg-[#e1e2e4]">
        <p>{label}</p>
      </button>
    );
  };

  return (
    <section className="pt-[60px]">
      <main className="flex flex-col justify-center">
        <header className="flex items-center justify-center gap-2">
          <h1 className="text-[22px] font-bold">
            나에게 필요한 커리어 인사이트
          </h1>
          <div>
            <TitleIconSVG />
          </div>
        </header>

        <div className="flex flex-wrap justify-center gap-2 my-8">
          {menuData.map((label, idx) => (
            <MenuBtn key={idx} label={label} />
          ))}
          <button className="ml-4 rounded-md border-[1px] border-[#e1e2e4] px-[10px] py-[1px] shadow-md">
            <TagMoreSVG />
          </button>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-[20px] gap-y-[32px]">
          {cardData.map(({ img, title, text, logo, name }, idx) => {
            return (
              <li
                key={idx}
                className="hover:easy-out hover:delay=[1000ms] hover:translate-y-[-4px] hover:opacity-100 hover:transition-all"
              >
                <Card
                  img={
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full rounded-md"
                    ></img>
                  }
                  title={title}
                  text={text}
                  logo={<img src={logo} alt={title} className="w-4 h-4"></img>}
                  name={name}
                ></Card>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center mt-12">
          <button className="border-gray flex cursor-pointer items-center gap-2 rounded-full border-[1px] px-28 py-4">
            <p className="text-[16px] font-semibold">더 많은 콘텐츠 보기</p>
            <div>
              <ArrowDownSVG />
            </div>
          </button>
        </div>
      </main>
    </section>
  );
};

export default CareerCard;
