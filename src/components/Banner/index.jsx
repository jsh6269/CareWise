import { Link } from "react-router-dom";
import clothes from "../../assets/images/banner/clothes.png";
import label3 from "../../assets/images/banner/label3.png";
import label5 from "../../assets/images/banner/label5.png";
import closet from "../../assets/images/banner/closet.png";

const Banner = (props) => {
  let id = props.id;
  switch (id) {
    case 0:
      return Banner0;
    case 1:
      return Banner1;
    case 2:
      return Banner2;
    case 3:
      return Banner3;
    default:
      return <div>Unknown</div>;
  }
};

const Banner0 = (
  <div className="w-[1440px] h-[480px]">
    <div
      className={`w-[1440px] h-[480px] top-0 left-0 bg-cover bg-[50%_50%]`}
      style={{ backgroundImage: `url(${closet})` }}
    >
      <div className="flex flex-col w-[580px] items-end gap-3.5 relative top-[259px] left-[794px]">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[17px] text-right tracking-[0] leading-[normal]">
          의복 관리법 제공부터, 세탁기호 분석까지
        </p>
        <p className="relative self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[40px] text-right tracking-[0] leading-[normal]">
          복잡하고 어려운 의복 관리,
          <br />
          CareWise로 현명하게 실천해요
        </p>
      </div>
    </div>
  </div>
);

const Banner1 = (
  <div className="w-[1440px] h-[480px]">
    <div className="w-[1440px] h-[480px] top-0 left-0 bg-[#b5b5b5]">
      <div className="relative w-[1051px] h-[259px] top-[127px] left-[198px]">
        <Link to="/care-search">
          <button className="all-[unset] box-border flex w-[243px] items-center justify-center gap-2 px-3 py-4 absolute top-[206px] left-[808px] rounded-lg overflow-hidden border-2 border-solid border-white">
            <button className="all-[unset] box-border relative w-fit mt-[-2.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-neutral-100 text-base tracking-[0] leading-4 whitespace-nowrap">
              관리법 검색하러 가기
            </button>
          </button>
        </Link>
        <img
          className="absolute w-[182px] h-[181px] top-0 left-[830px]"
          alt="clothes"
          src={clothes}
        />
        <div className="flex flex-col w-[537px] h-[251px] items-end gap-[21px] absolute top-2 left-0">
          <div className="self-stretch mt-[-1.00px] text-[25px] relative [font-family:'Inter-Light',Helvetica] font-light text-white tracking-[0] leading-[normal]">
            이 옷은 어떻게 관리해야할까?
          </div>
          <div className="relative self-stretch h-[139px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal]">
            헷갈리는 의복 세탁/관리법,
            <br />
            AI가 답해드려요!
          </div>
          <p className="w-[537px] text-[17px] relative [font-family:'Inter-Light',Helvetica] font-light text-white tracking-[0] leading-[normal]">
            어떻게 관리해야할지 헷갈리는 의류나, 소재를 검색해보세요.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Banner2 = (
  <div className="relative w-[1440px] h-[480px]">
    <div className="w-[1440px] h-[480px] top-0 left-0 bg-[#f8f8f8]">
      <Link to="/label-ex">
        <button className="all-[unset] box-border flex w-[287px] items-center justify-center gap-2 px-3 py-4 absolute top-[311px] left-[198px] rounded-lg overflow-hidden border-2 border-solid border-black">
          <button className="all-[unset] box-border relative w-fit mt-[-2.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-base tracking-[0] leading-4 whitespace-nowrap">
            세탁기호 분석하러 가기
          </button>
        </button>
      </Link>
      <div className="absolute w-[537px] h-[232px] top-[124px] left-[737px]">
        <div className="flex flex-col w-[537px] h-[232px] items-end gap-[21px] relative">
          <div className="self-stretch mt-[-1.00px] [font-family:'Inter-Light',Helvetica] font-light text-[25px] relative text-[#3f3f3f] tracking-[0] leading-[normal]">
            이 세탁기호는 무슨 뜻일까?
          </div>
          <div className="self-stretch h-[90px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[40px] relative text-[#3f3f3f] tracking-[0] leading-[normal]">
            세탁기호 분석하기
          </div>
          <p className="w-[537px] [font-family:'Inter-Light',Helvetica] font-light text-[17px] relative text-[#3f3f3f] tracking-[0] leading-[normal]">
            케어라벨에 그려져 있는 세탁기호의 사진을 업로드하거나, 그려보세요.
            <br />
            무슨 의미인지 분석해드릴게요!
          </p>
        </div>
      </div>
      <img
        className="absolute w-[287px] h-[182px] top-[108px] left-[198px] object-cover"
        alt="label5"
        src={label5}
      />
    </div>
  </div>
);

const Banner3 = (
  <div className="w-[1440px] h-[480px]">
    <div className="w-[1440px] h-[480px] top-0 left-0">
      <div className="h-[480px] bg-[#e4e4e4]">
        <div className="relative w-[1044px] h-[210px] top-[127px] left-[198px]">
          <Link to="/label-search">
            <button className="all-[unset] box-border flex w-[243px] items-center justify-center gap-2 px-3 py-4 absolute top-[162px] left-[801px] rounded-lg overflow-hidden border-2 border-solid border-[#3f3f3f]">
              <button className="all-[unset] box-border relative w-fit mt-[-2.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-base tracking-[0] leading-4 whitespace-nowrap">
                세탁기호 찾으러 가기
              </button>
            </button>
          </Link>
          <img
            className="absolute w-[330px] h-[97px] top-[10px] left-[730px]"
            alt="label3"
            src={label3}
          />
          <div className="flex flex-col w-[537px] items-end gap-[21px] absolute top-0 left-0 bg-[#e4e4e4]">
            <p className="self-stretch mt-[-1.00px] [font-family:'Inter-Light',Helvetica] font-light text-[25px] relative text-[#3f3f3f] tracking-[0] leading-[normal]">
              기호는 다르게 생겼는데, 의미는 똑같네...
            </p>
            <div className="self-stretch h-[90px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[40px] relative text-[#3f3f3f] tracking-[0] leading-[normal]">
              세탁기호 직접 찾아보기
            </div>
            <p className="w-[537px] [font-family:'Inter-Light',Helvetica] font-light text-[17px] relative text-[#3f3f3f] tracking-[0] leading-[normal]">
              국가별, 사업자별로 다양한 케어라벨의 세탁기호의 리스트를 제공해요.
              <br />
              세탁기호의 뜻을 직접 찾아보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
