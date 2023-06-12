import UploadSVG from "../assets/icons/upload";
import WriteSVG from "../assets/icons/write";

const AI = () => {
  return (
    <div className="flex h-[500px] items-center justify-center pt-[50px]">
      <div className="flex-col items-center justify-center text-center">
        <h1 className="mb-3 text-[30px] font-bold">
          이력서만 등록해도 나에게 딱 맞는 포지션 추천!
        </h1>
        <p className="mb-12 text-[13px] font-[500] leading-4 text-[#666666]">
          내 이력서를 분석하여 합격률이 높은 포지션을 알려드려요. <br />
          서류합격률은 이력서에 작성된 내용과 포지션과의 업무일치도를 기준으로
          계산됩니다.
        </p>
        <div className="flex gap-4">
          <div className="border-gray h-[180px] w-[300px] cursor-pointer flex-col items-center rounded-2xl border-[1px] p-6 shadow-md hover:border-[#36f] hover:text-[#36f]">
            <div className="mb-9 flex items-center justify-center">
              <UploadSVG />
            </div>
            <h1 className="my-2 text-[20px] font-bold">
              이력서를 업로드해보세요
            </h1>
            <p className="text-[13px] font-[600] text-[#999999]">
              파일 형식 : pdf, doc, docx
            </p>
          </div>
          <div className="border-gray h-[180px] w-[300px] cursor-pointer flex-col items-center rounded-2xl border-[1px] p-6 shadow-md hover:border-[#36f] hover:text-[#36f]">
            <div className="mb-7 flex items-center justify-center">
              <WriteSVG />
            </div>
            <h1 className="my-2 text-[20px] font-bold">
              이력서를 새로 작성할래요
            </h1>
            <p className="text-[13px] font-[600] text-[#999999]">
              작성 후 pdf로 저장 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
