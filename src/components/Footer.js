const Footer = () => {
  const titleList = ["기업소개", "이용약관", "고객센터"];

  const linkList = [
    {
      url: "https://www.instagram.com/wantedjobs.kr/",
      alt: "instagram",
    },
    {
      url: "https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw",
      alt: "youtube",
    },
    {
      url: "https://www.facebook.com/wantedkr",
      alt: "facebook",
    },
    {
      url: "https://blog.naver.com/wantedlab",
      alt: "blog",
    },
    {
      url: "https://apps.apple.com/kr/app/id1074569961",
      alt: "apple",
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.wanted.android.wanted&pli=1",
      alt: "google",
    },
  ];

  return (
    <div className="mb-[50px] ml-auto mr-auto flex max-w-[1060px] flex-col py-2">
      <div className="border-gray flex flex-wrap items-center justify-between border-b-[1px]">
        <div className="flex items-center gap-8">
          <nav>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <svg className="h-9 w-9" viewBox="0 0 79 32">
                  <path
                    fill="#24e0a6"
                    d="M27.755 5.155A15.953 15.953 0 0015.992 0C7.152 0-.012 7.164-.012 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0031.996 16c0-4.183-1.606-7.992-4.241-10.845z"
                  ></path>
                  <path
                    fill="#438bff"
                    d="M51.286 5.155A15.953 15.953 0 0039.523 0c-8.84 0-16.004 7.164-16.004 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0055.527 16c0-4.179-1.61-7.992-4.241-10.845z"
                  ></path>
                  <path
                    fill="#2c5bf2"
                    d="M74.812 5.155A15.953 15.953 0 0063.049 0c-8.84 0-16.004 7.164-16.004 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0079.053 16c0-4.183-1.61-7.992-4.241-10.845z"
                  ></path>
                  <path
                    fill="#24e0bc"
                    d="M27.755 5.155A15.953 15.953 0 0015.992 0C7.152 0-.012 7.164-.012 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0123.514 16c0-4.183 1.61-7.992 4.241-10.845z"
                  ></path>
                  <path
                    fill="#438bff"
                    d="M51.282 5.155C48.359 1.985 44.171 0 39.519 0s-8.84 1.985-11.763 5.155a15.953 15.953 0 014.241 10.853c0 4.187-1.61 8-4.241 10.853 2.923 3.17 7.111 5.155 11.763 5.155s8.84-1.985 11.763-5.155c-2.631-2.853-4.241-6.662-4.241-10.853s1.61-8 4.241-10.853z"
                  ></path>
                  <path
                    fill="#3a68f9"
                    d="M27.755 5.155a15.953 15.953 0 00-4.241 10.853c0 4.187 1.61 8 4.241 10.853 2.631-2.853 4.241-6.662 4.241-10.853s-1.606-8-4.241-10.853z"
                  ></path>
                  <path
                    fill="#2c5bf2"
                    d="M63.049 0c-4.653 0-8.84 1.985-11.763 5.155a15.953 15.953 0 014.241 10.853c0 4.187-1.61 8-4.241 10.853a15.953 15.953 0 0011.763 5.155c8.84 0 16.004-7.164 16.004-16.004C79.053 7.164 71.885 0 63.049 0z"
                  ></path>
                  <path
                    fill="#0049db"
                    d="M51.282 5.155a15.953 15.953 0 00-4.241 10.853c0 4.187 1.61 8 4.241 10.853a15.953 15.953 0 004.241-10.853c.004-4.191-1.606-8-4.241-10.853z"
                  ></path>
                </svg>
                <a href="https://www.wanted.co.kr/">
                  <svg
                    className="w-16 h-16 cursor-pointer"
                    viewBox="0 0 140 32"
                  >
                    <path
                      fill="currentColor"
                      d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
                    ></path>
                  </svg>
                </a>
              </div>
              <ul className="flex gap-8 font-[#3a3a3a] font-[500]">
                {titleList.map((label, idx) => {
                  return (
                    <li key={idx} className="cursor-pointer whitespace-nowrap">
                      <a href="/">{label}</a>
                    </li>
                  );
                })}

                <li className="font-bold cursor-pointer whitespace-nowrap">
                  <a>개인정보 처리방침</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <ul className="flex gap-3 my-4">
            {linkList.map(({ url, alt }, index) => (
              <li key={index} className="cursor-pointer">
                <a href={url}>
                  <img
                    src={require(`../assets/imgs/logo/${alt}.png`)}
                    alt={alt}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-[12px] text-[#767676]">
        <div className="py-6">
          <p className="leading-5">
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147 <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            사업자등록번호 : 299-86-00021 | 02-539-7118 <br /> © Wantedlab, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
