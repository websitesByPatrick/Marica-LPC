import Header from "@/components/Header";
import WhatCanACounselorHelp from "@/components/WhatCanACounselorHelp";
import WhatIsMentalHealth from "@/components/WhatIsMentalHealth";

export default function Home() {
  return (
    <div className="h-screen bg-black max-w-[1200px] mx-auto py-10">
      <div>
        <Header />
      </div>

      <div className="bg-black text-slate-950">
        <WhatIsMentalHealth />
      </div>

      <div className="bg-black text-slate-950">
        <WhatCanACounselorHelp/>
      </div>
      
    </div>
  );
}
