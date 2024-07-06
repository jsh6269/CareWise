import Banner from "../components/Banner";
// 홈화면
const HomePage = () => {
  return (
    <div>
      <Banner key={0} id={0} />
      <Banner key={1} id={1} />
      <Banner key={2} id={2} />
      <Banner key={3} id={3} />
    </div>
  );
};

export default HomePage;
