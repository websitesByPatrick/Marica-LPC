import Header from "@/components/Header";
import { whatIsMentalHealth, howACounselorCanHelp } from "@/public/content";
import HomeCard from "@/components/Cards/HomeCard";

export default function Home() {
  return (
    <div className="h-screen bg-black max-w-[1200px] mx-auto py-10">
      <div>
        <Header />
      </div>

      <HomeCard
        content={whatIsMentalHealth}
      />

      <HomeCard
        content={howACounselorCanHelp}
      />
    </div>
  );
}
