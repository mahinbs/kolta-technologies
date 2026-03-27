import React from "react";
import { circleImg } from "../../content/constant";

const workProcess = [
  {
    id: 1,
    title: "Discovery",
    desc: "We unpack goals, constraints, and success signals—who ships, who approves, and what “done” means for your users.",
  },
  {
    id: 2,
    title: "Blueprint",
    desc: "Architecture, milestones, and risk spikes are written down so scope, cloud cost, and data flows stay understandable.",
  },
  {
    id: 3,
    title: "Design & prototype",
    desc: "Interactive flows on real breakpoints with accessibility and content rules your engineers can implement verbatim.",
  },
  {
    id: 4,
    title: "Build & verify",
    desc: "CI-backed increments, automated checks on critical paths, and security-minded reviews before anything hits production.",
  },
  {
    id: 5,
    title: "Launch & learn",
    desc: "Phased releases, monitoring, and a feedback loop so koltatech.ai-grade reliability continues after the ribbon-cutting.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <img
        data-aos="fade-down-right"
        src={circleImg}
        className="z-[-1] absolute top-[2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
        loading="lazy"
      />
      <img
        data-aos="fade-up-right"
        src={circleImg}
        className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
        alt=""
        loading="lazy"
      />
      <div className="wrapper space-y-3">
        <h3 className="text1 text-center">
          How we move from brief
          <br />
          <span className="text-primary">to shipped software</span>
        </h3>
        <p
          className="desc text-center max-w-4xl mx-auto text-[#FEFEFE]"
        >
          Every phase ties back to your requirements and observable outcomes—so
          app, web, data, and cloud workstreams stay aligned instead of
          drifting into endless rework.
        </p>
        <div className="pt-5 flex flex-wrap justify-center gap-5 sm:gap-7 max-w-5xl mx-auto">
          {workProcess.map((item) => (
            <div
             
              key={item.id}
              className="group hover:bg-gradient-to-b from-primary/30 to-primary/10 
              flex flex-col gap-3 p-5 sm:p-8 rounded-2xl border-2 border-white/40 
              transition-colors duration-500 sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.5%-1.5rem)]"
            >
              <h4 className="text3 text-primary1 group-hover:text-white">
                {item.title}
              </h4>
              <p className="text-[#FEFEFE] group-hover:text-[#D6D6A6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
