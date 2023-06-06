import Card from "../components/common/RecruitCard";

import { recruitList } from "../DB/recruitList";

function RecruitmentMenu() {
  return (
    <div className="border-gray flex w-auto flex-col items-center justify-center border-b-[1px] py-[60px]">
      <div className="mb-[30px] text-[22px] font-semibold">
        채용 정보를 찾고 계셨나요?
      </div>
      <div className="border-gray flex h-auto w-full items-center justify-center border-[1px]">
        {recruitList.map(({ name, icon }, idx) => (
          <Card key={idx} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default RecruitmentMenu;
