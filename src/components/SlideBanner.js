import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/styles/slick.css";

const MySlide = () => {
  const data = [
    {
      id: 1,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1990%2F78f46d5b.jpg&w=1060&q=100",
      title: "HR 업무, 이게 최선일까?",
      text: "[무료 웨비나] Sass를 활용한 생산성 높이기",
    },
    {
      id: 2,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1975%2Fdebe424c.jpg&w=1060&q=100",
      title: "이제 면접 준비도 챗GPT로!",
      text: "면접 예상 질문부터 답변에 대한 피드백까지",
    },
    {
      id: 3,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2002%2F68e95300.jpg&w=1060&q=100",
      title: "비즈니스를 리드하는 에디터들",
      text: "폴인ㅣ와디즈ㅣ아웃스탠딩ㅣ롱블랙ㅣ29CM",
    },
    {
      id: 4,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&w=1060&q=100",
      title: "우리 회사를 소개합니다",
      text: "'회사'에 대한 정보, 원티드가 찾아드릴게요!",
    },
    {
      id: 5,
      image:
        "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1940%2F4a485a58.jpg&w=1060&q=100",
      title: "직장인 유형 테스트",
      text: "회사를 고를 때, 나는 어떤 유형일까요? ",
    },
  ];

  const Banner = ({ img, title, text }) => {
    return (
      <div className="flex flex-col">
        <div className="relative">
          <img src={img} alt={title} className="w-full rounded-lg"></img>
          <span className="slide-text-none border-gray slide-max absolute bottom-6 left-6 h-[146px] w-[330px] rounded-lg border-[2px] bg-white">
            <div className="border-gray border-b-[1px] px-4 py-6">
              <h1 className="text-[19px] font-black">{title}</h1>
              <p className="text-[13px] font-[500]">{text}</p>
            </div>
            <div className="flex items-center gap-[3px] p-4">
              <div className="cursor-pointer text-[13px] font-bold text-[#3366ff]	">
                바로가기
              </div>
            </div>
          </span>

          <span className="slide-text-none border-gray slide-min absolute bottom-5 left-6 rounded-md border-[2px] bg-white p-2">
            <div className="border-gray border-b-[1px] px-2 py-2">
              <h1 className="mb-1 text-[14px] font-black">{title}</h1>
              <p className="text-[9px] font-[500]">{text}</p>
            </div>
            <div className="p-2">
              <div className="cursor-pointer text-[10px] font-bold text-[#3366ff]">
                바로가기
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    centerPadding: "220px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    cssEase: "ease-out",
  };

  return (
    <Slider {...settings}>
      {data.map((it) => {
        return (
          <Banner
            key={it.id}
            img={it.image}
            title={it.title}
            text={it.text}
          ></Banner>
        );
      })}
    </Slider>
  );
};

export default MySlide;
