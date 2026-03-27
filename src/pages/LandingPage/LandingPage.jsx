import Button from "../../components/common/Button";
import webAboutImg from "../../assets/images/landing page/web-about.jpg";
import appAboutImg from "../../assets/images/landing page/app-about.png";
import IndustriesSection from "../../components/common/IndustriesSection";
import { Link } from "react-scroll";
import ContactForm2 from "../../components/common/ContactForm2";
// import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import { ourServices } from "../../content/ourServices";
import Testimonials from "../../components/common/Testimonials";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import ServicesSlider from "../../components/landingpage/ServicesSlider";
import ClientLogos from "../../components/common/ClientLogos";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";

export default function LandingPage({ page }) {
  const isWeb = page === "web";

  const data = ourServices.find(
    (service) =>
      service.title === (isWeb ? "Web Development+" : "App Development")
  ).serviceDetails;

  const portfolio = isWeb ? webDevelopmentPortfolio : appDevelopmentPortfolio;

  useEffect(() => {
      const tl = gsap.timeline();
      tl.to("#robot", {
        translateY: -80,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
  
      return () => {
        tl.kill();
      };
    }, []);
  return (
    <>
      <section className="min-h-screen flex items-center relative">
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            {isWeb ? (
              <h1 className="text1 font-montserrat max-w-[60rem]">
                Web Development+ for Teams Who Outgrow{" "}
                <span className="text-primary font-montserrat">
                  Template Launches
                </span>
              </h1>
            ) : (
              <h1 className="text1 font-montserrat max-w-[55rem]">
                Mobile Products Built for{" "}
                <span className="text-primary font-montserrat">
                  Real-World Usage
                </span>
              </h1>
            )}
            <p className="desc max-w-2xl pb-3">
              {isWeb
                ? "KOLTA TECHNOLOGIES engineers fast, accessible web experiences with the integrations and DevOps maturity you expect at koltatech.ai—SSR where SEO matters, APIs where ops matters, and observability before go-live."
                : "From native polish to cross-platform velocity, we ship apps with offline sense, push discipline, and store-ready release trains—so your roadmap survives OS updates and user growth without a rewrite."}
            </p>
            <Button scrollTo="contact" offset={100}>
              Get Started
            </Button>
          </div>

          {/* <div className="h-[50vh] translate-y-[5rem] lg:h-full w-full lg:w-2/3 lg:absolute -right-[10%] top-1/2 lg:-translate-y-1/2 z-10">
            <Spline
              className=""
              scene="https://prod.spline.design/4q-1rQRL9NalrNPY/scene.splinecode"
            />
          </div> */}
          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-2/3 lg:translate-y-0">
            {/* translate-y-[5rem] lg:h-full w-full lg:w-2/3 lg:absolute -right-[10%] top-1/2 lg:-translate-y-1/2 */}
            {/* <Spline
              className=""
              scene="https://prod.spline.design/4q-1rQRL9NalrNPY/scene.splinecode"
            /> */}
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcset={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="robot"
              width="600"
              height="400"
              className="h-[32vh] lg:h-[40vh] w-fit object-contain"
            />
          </div>
        </div>
      </section>
      <section id="about" className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4 w-full">
            <h3 className="text2">
              Welcome to{" "}
              <span className="text-primary1">
                KOLTA TECHNOLOGIES {isWeb ? "Web+" : "Mobile"} Studio
              </span>
            </h3>
            <h3 className="text2">
              Where Your{" "}
              <span className="text-primary1">
                {isWeb
                  ? "Roadmap Meets Production Discipline"
                  : "Use Cases Ship on Schedule"}
              </span>
            </h3>
            <p
              className="desc hyphens-auto w-full"
              dangerouslySetInnerHTML={{
                __html: isWeb
                  ? `We design and build web properties that behave like products: componentized front ends, 
              authenticated customer areas, and integrations that fail loudly—not silently. <br/> Web Development+ covers marketing sites, SaaS shells, commerce, headless CMS, and the 
              API glue that keeps finance, CRM, and support in sync. Performance, accessibility, and deploy hygiene are part of the brief—not a post-launch audit. <br/> You stay in the loop with previews, clear acceptance criteria, and runbooks so your internal team can inherit what we ship.`
                  : `We treat mobile as part of a larger system: sign-in, sync, notifications, and analytics 
    are specified alongside the hero screen. Native, hybrid, or cross-platform choices follow your latency, offline, and store-strategy constraints—not dogma. <br/> Our App Development practice pairs UI/UX rigor with integration and release engineering: TestFlight and Play tracks, phased rollout, crash triage, and feature flags when you need controlled exposure. <br/> The outcome is an app your users trust on day thirty, not only on launch day.`,
              }}
            ></p>
            <h5 className="text4">
              <span className="text-[#FFD63C]">KOLTA TECHNOLOGIES:</span>{" "}
              {isWeb
                ? "Serious web surfaces for serious traffic."
                : "Ships that survive the app stores and your backlog."}
            </h5>
            <div className="flex gap-10 pt-4">
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Quick Inquiry
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <img
              data-aos="fade-up"
              loading="lazy"
              src={isWeb ? webAboutImg : appAboutImg}
              width={500}
              height={600}
              alt=""
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <ServicesSlider
        service={isWeb ? "Web+" : "App"}
        data={data.ourExpertiseContent}
      />
      <IndustriesSection />
      {/* <DevelopmentProcess content={data.developmentProcess} /> */}
      <section id="works" className="py-14">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center text-primary">
            Selected work snapshots
          </h2>
          <div className="flex flex-wrap justify-center gap-7 pt-8">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="group relative aspect-square sm:w-[calc(100%/2-1.75rem)] lg:w-[calc(100%/3-1.75rem)] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-110 transition-all duration-500"
                />
                <h5 className="text3 absolute w-full bottom-0 left-0 py-3 bg-primary text-black text-center">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientLogos />
      <Testimonials />
      <ContactForm2 />
    </>
  );
}
