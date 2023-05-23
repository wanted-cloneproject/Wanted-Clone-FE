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
    <div className="mx-auto flex justify-center">
      <div className="z-999 border-gray flex h-[486px] w-[844px] flex-col rounded-b-xl border-[1px] bg-white px-12 py-10">
        <div className="relative">
          <form>
            <input
              className="border-gray mb-9 w-full rounded-full border-[1px] px-12 py-4 placeholder:text-[#c8c8c9]"
              placeholder="검색어를 입력해 주세요."
            ></input>
            <svg
              className="absolute left-5 top-[18px] h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
            </svg>
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
