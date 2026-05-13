const Sk01 = () => {
    return (
        <div
            className="
 group relative flex flex-col gap-3 p-4 bg-gray-900 w-120 h-50 font-light text-white 
  border-2 border-amber-50/0 hover:border-red-600 duration-300 overflow-hidden
  
  /* 1. 부모 요소에 새로운 쌓임 맥락 형성 */
  z-0

  before:content-[''] before:absolute before:-top-12 before:left-15 before:w-40 before:h-40 
  before:bg-red-600 before:rounded-full before:blur-3xl before:opacity-0 
  before:transition-opacity before:duration-500 hover:before:opacity-100
  before:z-[-1]
  
  after:content-[''] after:absolute after:-top-20 after:right-10 after:w-50 after:h-50 
  after:bg-orange-500 after:rounded-full after:blur-3xl after:opacity-0 
  after:transition-opacity after:duration-500 hover:after:opacity-100
  after:z-[-1]
"
        >
            <svg width="30px" height="30px" className="bg-black">
                <rect x="5" y="5" width="10" height="10" fill="white" />
            </svg>
            <strong className="font-bold">함께라서 가능한 스타트업 경험</strong>
            <p className="text-xs text-white/60 group-hover:text-white duration-300">
                TECH UP은 서로 다른 직군의 대규모 인원이 모여 하나의 팀으로
                협업합니다. 기획, 디자인, 개발 등 전 직군이 스타트업 환경을
                재현하며 실전을 경험합니다.
            </p>
            <div className="flex gap-4">
                {["소규모 기업", "다양한 직군", "실무 경험"].map((item) => (
                    <span className="bg-red-500/30 px-2 py-1 text-[0.6rem] tracking-wide text-red-300 ">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Sk01;
