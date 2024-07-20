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
  <section className="w-[1440px] h-[480px]">
    <div
      className={`w-[1440px] h-[480px] top-0 left-0 bg-cover bg-[50%_50%]`}
      style={{ backgroundImage: `url(${closet})` }}
    >
      <article className="flex flex-col w-[580px] items-end gap-3.5 relative top-[259px] left-[794px]">
        <p className="relative inter-light mt-[-1.00px] text-white text-[17px] text-right">
          의복 관리법 제공부터, 세탁기호 분석까지
        </p>
        <p className="banner-title inter-semi-bold text-right text-white">
          복잡하고 어려운 의복 관리,
          <br />
          CareWise로 현명하게 실천해요
        </p>
      </article>
    </div>
  </section>
);

const Banner1 = (
  <section className="w-[1440px] h-[480px]">
    <div className="w-[1440px] h-[480px] top-0 left-0 bg-[#b5b5b5]">
      <div className="relative w-[1051px] h-[259px] top-[127px] left-[198px]">
        <Link to="/care-search">
          <span className="span-button w-[243px] top-[206px] left-[808px] border-white">
            <button className="banner-button text-neutral-100">
              관리법 검색하러 가기
            </button>
          </span>
        </Link>
        <img
          className="absolute w-[182px] h-[181px] top-0 left-[830px]"
          alt="clothes"
          src={clothes}
        />
        <article className="absolute flex flex-col w-[537px] h-[251px] items-end gap-[21px] top-2 left-0">
          <p className="relative inter-light mt-[-1px] text-[25px] text-white">
            이 옷은 어떻게 관리해야할까?
          </p>
          <p className="banner-title inter-semi-bold h-[139px] text-white">
            헷갈리는 의복 세탁/관리법,
            <br />
            AI가 답해드려요!
          </p>
          <p className="relative inter-light w-[537px] text-[17px] text-white">
            어떻게 관리해야할지 헷갈리는 의류나, 소재를 검색해보세요.
          </p>
        </article>
      </div>
    </div>
  </section>
);

const Banner2 = (
  <section className="relative w-[1440px] h-[480px]">
    <div className="w-[1440px] h-[480px] top-0 left-0 bg-[#f8f8f8]">
      <Link to="/label-ex">
        <span className="span-button w-[287px] top-[311px] left-[198px] border-black">
          <button className="banner-button text-[#3f3f3f]">
            세탁기호 분석하러 가기
          </button>
        </span>
      </Link>
      <article className="absolute w-[537px] h-[232px] top-[124px] left-[737px]">
        <div className="flex flex-col w-[537px] h-[232px] items-end gap-[21px] relative">
          <p className="relative inter-light mt-[-1.00px] text-[25px] text-[#3f3f3f]">
            이 세탁기호는 무슨 뜻일까?
          </p>
          <p className="banner-title inter-semi-bold h-[90px] text-[#3f3f3f]">
            세탁기호 분석하기
          </p>
          <p className="relative inter-light w-[537px] text-[17px] text-[#3f3f3f]">
            케어라벨에 그려져 있는 세탁기호의 사진을 업로드하거나, 그려보세요.
            <br />
            무슨 의미인지 분석해드릴게요!
          </p>
        </div>
      </article>
      <img
        className="absolute w-[287px] h-[182px] top-[108px] left-[198px] object-cover"
        alt="label5"
        src={label5}
      />
    </div>
  </section>
);

const Banner3 = (
  <section className="w-[1440px] h-[480px]">
    <div className="w-[1440px] h-[480px] top-0 left-0">
      <div className="h-[480px] bg-[#e4e4e4]">
        <div className="relative w-[1044px] h-[210px] top-[127px] left-[198px]">
          <Link to="/label-search">
            <span className="span-button w-[243px] top-[162px] left-[801px] border-[#3f3f3f]">
              <button className="banner-button text-[#3f3f3f]">
                세탁기호 찾으러 가기
              </button>
            </span>
          </Link>
          <img
            className="absolute w-[330px] h-[97px] top-[10px] left-[730px]"
            alt="label3"
            src={label3}
          />
          <article className="flex flex-col w-[537px] items-end gap-[21px] absolute top-0 left-0 bg-[#e4e4e4]">
            <p className="relative inter-light mt-[-1.00px] text-[25px] text-[#3f3f3f]">
              기호는 다르게 생겼는데, 의미는 똑같네...
            </p>
            <div className="banner-title inter-semi-bold h-[90px] text-[#3f3f3f]">
              세탁기호 직접 찾아보기
            </div>
            <p className="relative inter-light w-[537px] text-[17px] text-[#3f3f3f]">
              국가별, 사업자별로 다양한 케어라벨의 세탁기호의 리스트를 제공해요.
              <br />
              세탁기호의 뜻을 직접 찾아보세요!
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
