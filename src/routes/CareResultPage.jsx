// 관리법 검색 결과
import shirt from "../../src/assets/images/icons/shirt.png";
const CareResultPage = () => {
  return (
    <div className="w-[1440px] h-[2036px] relative bg-white">
      <div className="flex items-center justify-center border-2 border-[#A4A4A4] rounded-lg w-[1043px] h-[149px] mt-[71px] ml-[199px]">
        <img className="w-[90px] h-[75px] mr-[20px]" alt="shirt" src={shirt} />
        <div className="text-[25px] text-[#3F3F3F]">
          섬유 혼용률 [레이온 97%, 폴리우레탄 3%]의 [블라우스]
        </div>
      </div>
      <div className="left-[197px] top-[100px] relative">
        <div className="w-[822px] h-[47px] absolute text-neutral-700 text-[40px] font-semibold font-['Inter']">
          해당 의복에 대한 관리법이에요:
        </div>
        <div className="absolute mt-[77px] px-[35px] py-[44px] w-[1043px] h-[451px] border-2 border-[#E5E5E5] bg-[#F2F2F2] rounded-xl text-[20px] text-[#757575]">
          똑똑한 인공지능이 결과를 내려주겠지요? 그거를 이 글씨크기와 색으로
          써주세요!
        </div>
      </div>

      <div className="left-[197px] top-[800px] relative">
        <div className="w-[822px] h-[47px] absolute text-neutral-700 text-[40px] font-semibold font-['Inter']">
          해당 의복에 많이 쓰이는 세탁기호예요:
        </div>
        <div className="absolute mt-[118px] flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex">
            <img
              className="w-[120px] h-[120px]"
              src="https://s3-alpha-sig.figma.com/img/4c9e/a8e5/65158836de07c744c8311a251a7613ba?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6eYY4UZkwjZZI7P3DZ~aIGvaahSfMVprlpBuXRPeecsKB5MBpk4-MLOqUYfXCIz3t~FC2s-MAhDvb4sMgVMoFj6g3WS9pz1tl8v7rh20pR8UHrQ3bucyZjNiTynN1R-k9vqXq6gXZ5TnibqdTqojs5JPKxqOgOzV3k50nj046BaDCl8otVZsHk4qwyVShg1jcf~v55jRLo-FiaXHerzXynq8EelI-A4LBa7odSbFhtgg2B995mIEZCY1ryPlsBlXbl1m3nj5m23hS~7jE5FpZDsLSgiYJjFqJRF9vNDkud~6usWWk2RdWrnZgyj7OA0Khu0WSdXPsxCl8Wvk-OTng__"
            />
            <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
              높은 온도에서 기계건조하세요.
            </div>
          </div>
        </div>
        <div className="absolute mt-[278px] flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex">
            <img
              className="w-[120px] h-[120px]"
              src="https://s3-alpha-sig.figma.com/img/4c9e/a8e5/65158836de07c744c8311a251a7613ba?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6eYY4UZkwjZZI7P3DZ~aIGvaahSfMVprlpBuXRPeecsKB5MBpk4-MLOqUYfXCIz3t~FC2s-MAhDvb4sMgVMoFj6g3WS9pz1tl8v7rh20pR8UHrQ3bucyZjNiTynN1R-k9vqXq6gXZ5TnibqdTqojs5JPKxqOgOzV3k50nj046BaDCl8otVZsHk4qwyVShg1jcf~v55jRLo-FiaXHerzXynq8EelI-A4LBa7odSbFhtgg2B995mIEZCY1ryPlsBlXbl1m3nj5m23hS~7jE5FpZDsLSgiYJjFqJRF9vNDkud~6usWWk2RdWrnZgyj7OA0Khu0WSdXPsxCl8Wvk-OTng__"
            />
            <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
              높은 온도에서 기계건조하세요.
            </div>
          </div>
        </div>
        <div className="absolute mt-[438px] flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex">
            <img
              className="w-[120px] h-[120px]"
              src="https://s3-alpha-sig.figma.com/img/4c9e/a8e5/65158836de07c744c8311a251a7613ba?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6eYY4UZkwjZZI7P3DZ~aIGvaahSfMVprlpBuXRPeecsKB5MBpk4-MLOqUYfXCIz3t~FC2s-MAhDvb4sMgVMoFj6g3WS9pz1tl8v7rh20pR8UHrQ3bucyZjNiTynN1R-k9vqXq6gXZ5TnibqdTqojs5JPKxqOgOzV3k50nj046BaDCl8otVZsHk4qwyVShg1jcf~v55jRLo-FiaXHerzXynq8EelI-A4LBa7odSbFhtgg2B995mIEZCY1ryPlsBlXbl1m3nj5m23hS~7jE5FpZDsLSgiYJjFqJRF9vNDkud~6usWWk2RdWrnZgyj7OA0Khu0WSdXPsxCl8Wvk-OTng__"
            />
            <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
              높은 온도에서 기계건조하세요.
            </div>
          </div>
        </div>
        <div className="absolute mt-[598px] flex-col justify-start items-start gap-[18px] inline-flex">
          <div className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex">
            <img
              className="w-[120px] h-[120px]"
              src="https://s3-alpha-sig.figma.com/img/4c9e/a8e5/65158836de07c744c8311a251a7613ba?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6eYY4UZkwjZZI7P3DZ~aIGvaahSfMVprlpBuXRPeecsKB5MBpk4-MLOqUYfXCIz3t~FC2s-MAhDvb4sMgVMoFj6g3WS9pz1tl8v7rh20pR8UHrQ3bucyZjNiTynN1R-k9vqXq6gXZ5TnibqdTqojs5JPKxqOgOzV3k50nj046BaDCl8otVZsHk4qwyVShg1jcf~v55jRLo-FiaXHerzXynq8EelI-A4LBa7odSbFhtgg2B995mIEZCY1ryPlsBlXbl1m3nj5m23hS~7jE5FpZDsLSgiYJjFqJRF9vNDkud~6usWWk2RdWrnZgyj7OA0Khu0WSdXPsxCl8Wvk-OTng__"
            />
            <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
              높은 온도에서 기계건조하세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareResultPage;
