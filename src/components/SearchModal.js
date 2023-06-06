import SearchSVG from "../assets/icons/inputSearch";

const MenuModal = () => {
  const recommend = [
    "#연봉상위2~5%",
    "#퇴사율5%이하",
    "#재택근무",
    "#주4일근무",
    "#주35시간",
  ];

  const popular = [
    "프론트엔드 -",
    "uiux 디자이너",
    "데이터 엔지니어 -",
    "서비스 기획",
    "데이터 분석 -",
    "서비스 운영 -",
    "데이터 분석가 -",
    "콘텐츠 마케터",
  ];

  return (
    <div className="flex justify-center mx-auto">
      <div className="z-999 border-gray flex h-[486px] w-[844px] flex-col rounded-b-xl border-[1px] bg-white px-12 py-10">
        <div className="relative">
          <form>
            <input
              className="border-gray mb-9 w-full rounded-full border-[1px] px-12 py-4 placeholder:text-[#c8c8c9]"
              placeholder="검색어를 입력해 주세요."
            ></input>
            <SearchSVG />
          </form>
        </div>

        <div className="mb-9">
          <h1 className="mb-[20px] text-[18px] font-bold">추천 검색어</h1>
          <ul className="flex flex-wrap gap-6">
            {recommend.map((it) => {
              return (
                <li>
                  <button className="cursor-pointer rounded-full bg-[#f3f3f3] px-5 py-2 text-[13px] font-bold hover:text-[#3366ff]">
                    {it}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="mb-[20px] flex items-center gap-4">
            <h1 className="text-[18px] font-bold">인기 검색어</h1>
            <p className="text-gray text-[12px]">01:00 기준</p>
          </div>
          <ul className="flex flex-wrap">
            {popular.map((it, index) => {
              return (
                <li className="mb-[18px] flex w-[20vw] gap-4 whitespace-nowrap">
                  <p className="font-bold">{index + 1}</p>
                  <button className="hover:font-[600] hover:text-[#3366ff]">
                    {it}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
