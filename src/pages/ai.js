const AI = () => {
  return (
    <div className="flex h-[560px] items-center justify-center pt-[60px]">
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
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="32"
                height="34"
                viewBox="0 0 32 34"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g stroke="#333" stroke-width="3">
                    <g>
                      <g>
                        <path
                          d="M25.6 20.117L25.6 28.579 0 28.617 0 20.154M12.8.708L12.8 21.108"
                          transform="translate(-543 -398) translate(543 398) translate(3.2 2.55)"
                        ></path>
                        <path
                          fill="current"
                          d="M18.8 0L12.8 7.083 6.8 0"
                          transform="translate(-543 -398) translate(543 398) translate(3.2 2.55) rotate(-180 12.8 3.542)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
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
              <svg width="40" height="42" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9338 2.08059C17.5629 1.80534 17.0366 1.83583 16.7002 2.17212L3.43579 15.4323L3.33867 15.5461C3.22211 15.7068 3.1582 15.9013 3.1582 16.1023V19.8947L3.16685 20.0233C3.22958 20.4857 3.62596 20.8421 4.10558 20.8421H7.2678L7.39635 20.8335C7.85877 20.7707 8.21517 20.3744 8.21517 19.8947L8.20652 19.7662C8.14379 19.3038 7.74742 18.9474 7.2678 18.9474H5.05168V16.4956L13.2631 8.28674L15.7123 10.7359L9.7494 16.6985L9.65767 16.8047C9.38244 17.1756 9.41297 17.7019 9.74927 18.0383C10.1192 18.4083 10.719 18.4083 11.0891 18.0384L21.8281 7.30155L21.9198 7.1953C22.195 6.82447 22.1645 6.29818 21.8283 5.96181L18.04 2.17233L17.9338 2.08059ZM17.0521 9.39616L19.8181 6.63032L17.3688 4.18232L14.6031 6.94717L17.0521 9.39616Z"
                ></path>
              </svg>
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
