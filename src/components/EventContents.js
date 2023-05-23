import Card from "./common/EventCard";

const MyEvent = () => {
  return (
    <section className="pt-[60px]">
      <div className="border-gray flex w-full flex-col justify-center border-b-[1px]">
        <div className="mb-[60px] flex h-[64px] w-auto cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-[17px] font-bold text-white">
          <p>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀</p>
          <svg fill="white" className="h-4 w-4" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </div>
        <div>
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="text-[22px] font-bold">
                커리어 성장을 위한 맞춤 이벤트
              </h1>
              <div className="flex cursor-pointer items-center gap-1 text-[14px] font-[600] text-[#8a8a8a]">
                <span>이벤트 전체보기</span>
                <svg fill="gray" className="h-4 w-4" viewBox="0 0 19 19">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex pb-[60px]">
            <div className="flex w-auto gap-4">
              <Card
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2759%2F4c071b44.jpg&amp;w=1200&amp;q=100"
                label="아티클"
                title="이번달 인기 아티클 Top5ㅣMonthly Pick 3월"
              ></Card>
              <Card
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2669%2F22da8214.jpg&amp;w=1200&amp;q=100"
                label="아티클"
                title="채용 담당자를 사로잡는 경력직 이력서 쓰는 법"
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyEvent;
