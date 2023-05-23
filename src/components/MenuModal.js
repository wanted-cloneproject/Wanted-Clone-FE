const MenuModal = () => {
  const list = [
    "직군 전체",
    "개발",
    "경영·비즈니스",
    "마케팅·광고",
    "디자인",
    "영업",
    "게임 제작",
    "건설·시설",
    "미디어",
    "교육",
    "공공·복지",
    "금융",
    "제조·생산",
    "HR",
    "엔지니어링·설계",
    "의료·제약·바이오",
    "식·음료",
  ];

  return (
    <div className="mx-auto w-[1060px]">
      <div className="justify-centerz-999 border-gray absolute flex h-[540px] w-[220px] overflow-y-scroll rounded-b-md border-[1px] bg-white px-6 py-5 scrollbar-hide">
        <ul>
          {list.map((it) => {
            return (
              <li className="cursor-pointer pb-5 text-[14px] font-[900] hover:text-[#3366ff]">
                {it}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuModal;
