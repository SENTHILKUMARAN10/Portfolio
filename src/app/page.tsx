import { HeroHighlightDemo } from '@/components/ui/hero-highlight';
import Navbar from '@/components/ui/navbar';
import { TimelineDemo } from '@/provider/timeline';
import { AppleCardsCarouselDemo } from '@/provider/focus-card';
import { StickyScrollRevealDemo } from '@/provider/projects';
import { BackgroundBeamsWithCollision } from '@/ui/beam';
import { BackgroundLines } from '@/ui/background-lines';
import { FloatingDockDemo } from '@/provider/dock';
import FooterFull from '@/components/ui/footer';
import Image from 'next/image';
export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">

      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
          <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
            <div className="absolute inset-0 h-full w-full items-center px-0 py-0 [background:radial-gradient(125%_125%_at_50%_0%,#000_35%,#223_100%)]">

            <Image
              src="/sk/"
              width={1500}
              height={100}
              alt="Aceternity Logo"
              style={{ opacity: 0.2 }} // Adjust the opacity value as needed
/>
            </div>

      <BackgroundLines>
              <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
                  <HeroHighlightDemo >

                  </HeroHighlightDemo>
              </div>
        </BackgroundLines> 
                <div className="flex items-center flex-col mt-[-250px]">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          Download CV
                        </span>
                  </button>
              </div>
          </section>

            
      </section>
      <section className="max-h-40px w-screen mt-0 [background:radial-gradient(125%_125%_at_50%_100%,#000_35%,#223_100%)]">
        <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      </section>
      <section className="h-screen w-screen [background:radial-gradient(125%_125%_at_50%_0%,#000_35%,#223_100%)]">
      <div className="w-full h-full ">
      <StickyScrollRevealDemo></StickyScrollRevealDemo>
      </div>
      </section>
      <section className="h-20px w-screen mt-[-10px] [background:radial-gradient(125%_125%_at_50%_100%,#000_35%,#223_100%)]"> 
        <TimelineDemo></TimelineDemo>
      </section>
      <FooterFull></FooterFull>
    </main>
  );
}

