import { cvCardList } from "../DB/cvCardList";

const CV = () => {
  return (
    <div className="pt-[48px]">
      <div className="h-full w-full bg-[url('../assets/imgs/1.jpg')] object-cover text-center">
        <div className="flex-col py-24 text-white">
          <h1 className="mb-3 text-[50px] font-[1000] tracking-tighter">
            합격을 부르는 이력서
          </h1>
          <p className="mb-12 text-[20px] font-[400] leading-7 tracking-tighter">
            원티드 이력서로 지원시 <br /> 일반 이력서보다 서류 합격률이 2배
            높아집니다.
          </p>
          <div className="flex justify-center gap-3">
            <button className="rounded-full bg-white px-8 py-[14px] text-[18px] font-bold tracking-tight text-[#3366ff] hover:text-[#002fdb]">
              이력서 관리
            </button>
            <button className="rounded-full bg-[#3366ff] px-8 py-[14px] text-[18px] font-bold tracking-tight text-white hover:bg-[#184ced]">
              새 이력서 작성
            </button>
          </div>
        </div>
      </div>

      <section className="my-20">
        <h1 className="mb-12 text-center text-[32px] font-bold">
          원티드 이력서는 이런 점이 좋아요!
        </h1>
        <div className="flex justify-center">
          <div className="flex max-w-[1200px] flex-wrap justify-center gap-5">
            {cvCardList.map(({ title, text, img }) => (
              <div className="h-[480px] w-[520px] rounded-xl bg-[#f1f7fe]">
                <div className="px-[50px] py-[40px]">
                  <h1 className="mb-3 text-[24px] font-bold">{title}</h1>
                  <p className="text-[15px] font-[400] text-[#494949]">
                    {text}
                  </p>
                </div>
                <div>{img}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f2f4f7]">
        <div className="flex flex-col items-center justify-center p-20">
          <h1 className="mb-10 text-center text-[36px] font-bold">
            쓰는 사람도 보는 사람도 편하게
          </h1>
          <div className="w-[1060px] bg-white px-20 py-24">
            <div className="border-b-[1px] border-gray-400 pb-10">
              <h1 className="text-[25px] font-bold text-[#8a8a8a]">김티드</h1>
              <div className="flex justify-between mt-6">
                <p className="text-[16px] font-bold text-[#333333]">
                  이메일: wanted@wantedlab.com <br />
                  연락처: 000-0000-0000
                </p>
                <div className="rounded-md p-3 text-[14px] font-bold text-[#08ba9c] shadow-lg">
                  성별, 사진 등 불필요한 개인정보 최소화
                </div>
              </div>
              <div>
                <p className="mt-5 text-[16px] text-[#8a8a8a]">
                  Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자
                  김티드입니다. <br />
                  새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이
                  많습니다.
                </p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <ul className="flex flex-col gap-[14px] text-[16px] font-bold text-[#333333]">
                  <li>ㆍ 웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                  <li>
                    ㆍ 다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은
                    이해도
                  </li>
                  <li>
                    ㆍ 제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수
                  </li>
                  <li>ㆍ 프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
                </ul>
                <div className="rounded-md p-3 text-[14px] font-bold text-[#08ba9c] shadow-lg">
                  깔끔한 UI와 가독성 높은 디자인
                </div>
              </div>
            </div>
            <div className="flex gap-16 pt-10">
              <h5 className="whitespace-nowrap text-[15px] font-bold text-[#8a8a8a]">
                경력
              </h5>
              <div className="flex w-full flex-col border-b-[1px] border-gray-400 pb-12">
                <div className="flex justify-between text-[#8a8a8a]">
                  <div>
                    <div className="text-[16px] font-bold">원티드랩</div>
                    <p className="text-[14px]">프론트엔드팀 / 팀원</p>
                  </div>
                  <p className="text-[16px] font-bold">2020.07 - 현재 재직중</p>
                </div>
                <div className="my-6">
                  <div className="mb-3 font-bold">
                    웹사이트 SEO2022.05 - 2022.06
                  </div>
                  <div className="flex items-center justify-between">
                    <p>
                      도메인 정책 수립 및 URL 표준화(canonical) 및 페이지 별
                      메타태그/키워드 검증 <br />
                      - 성과: 오가닉 트래픽 30% 증가
                      <br />
                      - 사용 기술: Next.js, Google Search Console <br />- 링크:
                      https://www.wanted.co.kr
                    </p>
                    <div className="rounded-md p-3 text-[14px] font-bold text-[#08ba9c] shadow-lg">
                      업무 강점과 경력을 강조하는 템플릿
                    </div>
                  </div>
                </div>
                <div className="text-[#8a8a8a]">
                  <div className="mb-3 font-bold">
                    글로벌 채용 서비스 신규 개발2021.08 - 2022.04
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="leading-6">
                      메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종
                      컴포넌트 개발 (기여도 70%) <br />
                      - 성과: 일본/싱가폴/대만 3개국 대상 채용 서비스 출시
                      <br />- 사용 기술: React.js, Next.js, redux,
                      styled-component <br />- 링크:
                      https://www.wantedglobal.com{" "}
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <button className="border-gray rounded-full border-[1px] bg-white px-8 py-4 text-[18px] font-[600] text-gray-700 hover:bg-[#e1e2e3]">
              샘플 다운로드
            </button>
            <button className="border-gray rounded-full border-[1px] bg-[#3366ff] px-8 py-4 text-[18px] font-[600] text-white hover:bg-[#184ced]">
              새 이력서 작성
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="border-gray flex items-center justify-center border-b-[1px] pt-20">
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold ">이력서 완성하면</h1>
            <div className="flex items-center gap-1">
              <img
                src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png"
                width="198"
                height="33"
                alt="ai_logo"
                className="inline"
              />
              <p className="inline whitespace-nowrap text-[32px] font-bold">
                가 포지션 추천까지
              </p>
            </div>{" "}
            <p className="my-5 text-[18px] leading-8 text-[#171717]">
              이력서를 분석하여 딱 맞는 포지션을 찾아드려요. <br />
              원티드AI가 추천한 포지션은 서류합격률이 일반 지원 대비 2배
              높습니다.
            </p>
            <span className="mt-3">
              <button className="rounded-full bg-[#3366ff] px-7 py-4 text-[20px] font-bold text-white hover:bg-[#184ced]">
                지금 시작하기
              </button>
            </span>
          </div>
          <img
            src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png"
            width="516"
            height="352"
            alt="ai_sample"
          />
        </div>
      </section>
    </div>
  );
};

export default CV;
