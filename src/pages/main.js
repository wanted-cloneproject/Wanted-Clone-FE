import SlideBanner from "../components/SlideBanner";
import CareerContents from "../components/CareerContents";
import TestBanner from "../components/TestBanner";
import EventContents from "../components/EventContents";
import RecuitmentMenu from "../components/RecuitmentMenu";

const Main = () => {
  return (
    <div>
      <main className="pt-[30px]">
        <SlideBanner />
        <div className="mx-auto max-w-[1060px]">
          <CareerContents />
          <TestBanner />
          <EventContents />
          <RecuitmentMenu />
        </div>
      </main>
    </div>
  );
};

export default Main;
