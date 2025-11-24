import { whatIsMentalHealth, howACounselorCanHelp } from "@/public/content";
import HomeCard from "@/components/Cards/HomeCard";
import FullCard from "@/components/Cards/FullCard";

export default function Home() {
  return (
    <div className="h-screen bg-black max-w-[1200px] mx-auto py-10">
      <FullCard
        header="Finding Your Strength and Clarity"
        detail="From stress and anxiety to depression or relationship struggles—can make
        you feel overwhelmed and stuck. It's important to know that seeking
        support is a sign of strength, not weakness. Your mental health is the
        foundation of your well-being, influencing how you think, feel, and make
        decisions. We understand the struggle is real, and we offer a safe,
        confidential, and nonjudgmental space where you can truly express your
        feelings and begin to find a clearer path forward."
      />

      <HomeCard content={whatIsMentalHealth} />
      <HomeCard content={howACounselorCanHelp} reversed />
    </div>
  );
}
