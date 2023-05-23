import Card from "./common/CareerCard";

const CareerCard = () => {
  const cardData = [
    {
      img: "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FeyW6%2Fimage%2FvOB4og51bwNR-Ta-625d5x5-vCc.jpg&w=750&q=100",
      title: "#03 프로젝트 시나리오에 담겨야 할 논리",
      text: "UX 디자인 포트폴리오라고 인터넷에 뒤져보면 흔히 나오는 검색 결과들이 있을 거예요. 데스크 리서치(Desk Research)와 어피니티 다이어그램(Affinity Diagram) 그리고 퍼소나(Persona), 조금 더 열심히 한 친구는 고객 여정지도(User Journey Map 또는 Customer Journey Map)와 IA(Information ",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      name: "Aiden",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220321%2F8%2F77214252.jpg&w=750&q=100",
      title: "LINE X Wanted Session 4-2",
      text: "이번 영상에서는 본격적으로 애자일을 확장해는 방법에 대해 알아봅니다. ART를 설정하고 PI Planning의 구체적인 방법에 대해 다루고 있는데요, 라인싸몰의 예시로 자세한 방법을 보여드립니다. PI Planning을 하기 전 어떤 준비를 해야 하는지, 어떤 작업들을 먼저 처리해야 할지 등 실무에서 접했다면 '어떻게 해야하나' 고민될 일들을 이번 영상에서 살펴보세요!",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      name: "라인플러스 윤인석",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220901%2F9%2F47711509.jpg&w=750&q=100",
      title: "'에이블리' 데이터로 길을 터주다",
      text: "에이블리는 데이터를 어떻게 활용하고 있을까요?!데이터를 기반으로 진행된 실제 프로젝트 사례를 듣고 에이블리에 지원해 보세요!",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      name: "에이블리 조예지, 박범진, 박사임, 강명서, 박준수",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220325%2F2%2F45420340.jpg&w=750&q=100",
      title: "LINE X Wanted Session 5-4",
      text: "Agile Journey를 위한 안내서' 강의는 Agile Transformation을 마무리하며 마칩니다. 애자일한 팀으로 바꾸기 위해 살펴본 내용들을 정리하고, 우리가 잊지 말아야 하는 내용들을 다시 확인해봅니다.",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      name: "라인플러스 김유진",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220401%2F8%2F26472163.jpg&w=750&q=100",
      title: "데이터가 흐르는 회사 만들기 with 앰플리튜드 - 성여운",
      text: "앰플리튜드를 활용해 '데이터가 흐르는 원티드'를 만들어나가고 있는 원티드 데이터팀의 사례를 공유합니다.",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      name: "원티드랩 성여운",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210809%2F1%2F31825944.jpg&w=750&q=100",
      title: "태블로로 대시보드 만들기 2",
      text: "태블로로 대시보드 만들기 두 번째 강의! 지난 영상에서 태블로의 기본기를 익혔다면 이번 영상에서는 실무에 적용하는 방법을 살펴봅니다. 대시보드를 만들고 자동으로 업데이트 하는 방법, 새로 전달받은 데이터 리스트를 태블로에 적용하는 방법 등 실무에 많이 쓰이는 방법을 소개합니다. 연사님의 태블로 활용 꿀팁도 알아가세요!",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90",
      name: "우아한청년들 이유리",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220228%2F5%2F12657416.jpg&w=750&q=100",
      title: "LINE X Wanted Session1-1",
      text: "일을 하다보면 이런 얘기를 종종 듣게 됩니다. '우리도 이제 애자일하게 일 해보자!' 하지만 애자일이 도대체 무엇인지, 애자일하게 일 하면 어떤 점이 좋은지까지 알려주는 분들은 별로 없더라고요. 그러다보니 애자일하게 일 하면서 겪는 난관은 어떻게 해쳐가야 하는지도 알기 어렵습니다. '애자일하게 일 해보자!'는 미션을 받은 분들을 위해 LINE의 TPM 네 분을 모셨습니다.",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      name: "라인플러스 김유진",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220321%2F8%2F95153129.jpg&w=750&q=100",
      title: "LINE X Wanted Session 4-1",
      text: "애자일의 범위를 확장하는 것은 왜 필요할까요? 이번 영상에서는 Agile Scaling을 하는 이유에 대해 살펴보고 구체적인 방법애 대해 알아봅니다. 또 애자일 확장에 반드시 필요한 것들도 미리 확인해 봅니다.",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      name: "라인플러스 윤인석",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F5oek%2Fimage%2FoScGnbIalbDRXLoxaTUEH39-Esw.jpg&w=750&q=100",
      title: "가상공간에서의 쇼핑을 디자인하다, 무신사 VR Room",
      text: "Plus 人(in)spiration – 플러스엑스의 '일' 그리고 '사람' 이야기 더하기를 기울여 곱하기로 변화하듯 플러스엑스는 다양한 사람이 모여 함께 일합니다. 변화하는 시대에 다양한 경험들을 새롭게 조합해 나가며 늘 최선의 결과를 만들어 내는 플러스엑스. 그 사람들의 이야기를 만나보세요. 게임처럼 즐거운 가상공간에서의 쇼핑 BX팀 백시은 디자인 디렉터",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      name: "플러스엑스",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220307%2F9%2F43247939.jpg&w=750&q=100",
      title: "LINE X Wanted Session 2-5",
      text: "아무리 좋은 방법론을 적용한다고 해도, 지속 가능하지 않다면 그 효과는 떨어질 것입니다. 오늘은 지속가능한 성장을 위해 팀의 건강진단을 해봅니다. 팀의 건강검진은 어떻게 하는지 구체적인 사례를 통해 보여드립니다.",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      name: "라인플러스 고종범",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220311%2F5%2F60588532.jpg&w=750&q=100",
      title: "데이터 기반의 제품 개발 (Feat. A/B 테스트)",
      text: "데이터를 기반으로 의사결정하는 기업과 감에만 의존하는 기업의 미래는 어떻게 다를까요? 구글, 아마존, 페이스북과 같은 글로벌 테크 기업의 공통된 성공 습관 A/B 테스트는 신규 기능 출시에 대한 사용자 행동 변화를 정확하게 파악할 수 있는 데이터 실험 방법입니다. A/B 테스트를 어떤 상황에서 어떻게 해야 하는지 궁금하셨던 디자이너, 개발자분들을 위해 핵클에서 준비한 데이터 기반 제품 개발 프로세스, 지금 바로 확인하시고 서비스 폭풍 성장 예약하세요!",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90",
      name: "Hackle, 권오빈",
    },
    {
      img: "https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4DBT%2Fimage%2FoBiNqE0J2u91CSM-WjnkmvA8vKI.PNG&w=750&q=100",
      title: "EDA 그리고 적응력을 갖춘 살아있는 시스템",
      text: "이 글은 짧은 메모 둘을 인위적으로 합쳐보는 실험적인 글이다. 따라서 다소 무리가 있을 수 있다. 먼저 글을 쓰도록 유도한 자극은 또 Vaughn Vernon의 링크드인 최근 글이다.  EDA는 데이터 소유와 분배 책임에 대한 해결책 키야~ 멋진 정의다. 역시 대가구만! 인정! 2014년 샌프란시스코에서 열린 QCon에 참석했다. 그때 Spark 세션에서 ",
      logo: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
      name: "안영회 습작",
    },
  ];

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
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-[22px] font-bold">
            나에게 필요한 커리어 인사이트
          </h1>
          <svg width="24" height="24" viewBox="0 0 17 17">
            <defs>
              <filter id="bfoh3u0w3a">
                <feColorMatrix
                  in="SourceGraphic"
                  values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
                ></feColorMatrix>
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g>
                <g>
                  <g transform="translate(-1080 -374) translate(1080 374)">
                    <g>
                      <path
                        stroke="#999"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                        transform="translate(1 1)"
                      ></path>
                      <path
                        fill="#999"
                        d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                        transform="translate(1 1) rotate(-180 7.053 10.408)"
                      ></path>
                      <path
                        stroke="#999"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                        transform="translate(1 1)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-2">
          {menuData.map((label, idx) => (
            <MenuBtn key={idx} label={label} />
          ))}
          <button className="ml-4 rounded-md border-[1px] border-[#e1e2e4] px-[10px] py-[1px] shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="gray"
                d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z"
              ></path>
            </svg>
          </button>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-[20px] gap-y-[32px]">
          {cardData.map((it, idx) => {
            return (
              <li
                key={idx}
                className="hover:easy-out hover:delay=[1000ms] hover:translate-y-[-4px] hover:opacity-100 hover:transition-all"
              >
                <Card
                  img={
                    <img
                      src={it.img}
                      alt={it.title}
                      loading="lazy"
                      className="h-full w-full rounded-md"
                    ></img>
                  }
                  title={it.title}
                  text={it.text}
                  logo={
                    <img src={it.logo} alt={it.title} className="h-4 w-4"></img>
                  }
                  name={it.name}
                ></Card>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center">
          <div className="border-gray flex cursor-pointer items-center gap-2 rounded-full border-[1px] px-28 py-4">
            <p className="text-[16px] font-semibold">더 많은 콘텐츠 보기</p>
            <svg className="h-4 w-4" viewBox="0 0 19 19">
              <path
                d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCard;
