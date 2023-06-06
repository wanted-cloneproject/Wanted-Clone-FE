import ArrowRightSVG from "../assets/icons/whiteArrowRight";

const TestBanner = () => {
  return (
    <section className="pt-[60px]">
      <div className="border-gray border-b-[1px]">
        <div className="relative mb-[60px] w-auto rounded-lg bg-[#0d99ff]">
          <img
            className="w-auto"
            src="https://static.wanted.co.kr/images/type-test/typetest-banner-image.png"
            alt="banner"
          />
          <div className="absolute right-2/3 top-1/4">
            <h1 className="test-banner-title mb-1 text-[20px] font-bold text-white">
              내 유형과 가장 어울리는 회사는?
            </h1>
            <div className="flex items-center gap-1">
              <p className="test-banner-text cursor-pointer text-[14px] font-[600] text-white">
                유형테스트 하러가기
              </p>
              <ArrowRightSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestBanner;
