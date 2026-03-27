import banner from "../../assets/images/banners/aboutus.png";
import img1 from "../../assets/images/our-story.png";
import img2 from "../../assets/images/client-engagement-and-support.png";
import img3 from "../../assets/images/ongoing-support.png";
import img4 from "../../assets/images/Partnership Beyond Projects.png";
import { circleImg, futureGoals } from "../../content/constant";
import Testimonials from "../../components/common/Testimonials";
import ContactForm2 from "../../components/common/ContactForm2";

const AboutUs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-16 items-end">
          <h1 data-aos="fade-right" className="text_xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="py-14 bg-white text-black relative z-0">
        <div
          data-aos="fade-up"
          className="bg-primary absolute z-[-1] right-0 top-14 w-[6rem] h-[20rem]"
        ></div>
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-[40%_1fr] gap-8 pt-5">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-square object-cover"
                alt=""
              />
            </div>
            <div data-aos="fade-up">
              <p className="desc">
                KOLTA TECHNOLOGIES exists because vague “digital transformation”
                slides rarely survive contact with production. We formed around
                a simple idea: read the specification carefully, choose boring
                technology where it reduces risk, and instrument everything so
                teams at koltatech.ai maturity can operate what we leave behind.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 relative bg-white text-black overflow-hidden z-0">
        <div className="absolute z-[-1] top-[-3rem] left-[-3rem] h-[18rem] w-[12rem] bg-primary rounded-ee-full"></div>
        <div
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-3"
        >
          <h2 className="text1 max-w-3xl text-center">
            How we stay engaged while you stay in control
          </h2>
          <div className="h-2 w-[18rem] bg-white"></div>
        </div>
        <div className="wrapper pt-12 grid md:grid-cols-2 lg:grid-cols-[40%_1fr] items-center gap-8">
          <div className="">
            <img
              data-aos="fade-right"
              loading="lazy"
              src={img2}
              className="object-contain w-full aspect-square max-h-[30rem]"
              alt="Client Engagement & Support"
            />
          </div>
          <div data-aos="fade-up" className="space-y-5">
            <h4 className="text2">Transparent from kickoff</h4>
            <p className="desc">
              No black-box sprints—you see increments, risks, and trade-offs in
              plain language. Typical rituals:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4">Joint kickoff: </span>
                Goals, stakeholders, and definition-of-done captured once, then
                revisited—not rewritten weekly.
              </li>
              <li>
                <span className="text4">Milestone demos: </span>
                Working software, not slide updates, on a predictable cadence.
              </li>
              <li>
                <span className="text4">Decision log: </span>
                Architectural and product calls documented so future you agrees
                with past you.
              </li>
              <li>
                <span className="text4">Named contacts: </span>
                Delivery lead plus escalation path for urgent production issues.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-14 relative">
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
          alt=""
        />
        <img
          data-aos="fade-up-right"
          loading="lazy"
          src={circleImg}
          className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
          alt=""
        />
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">After launch</h3>
            <p className="desc">
              Software ages; we help yours age gracefully:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">
                  Iteration backlog:{" "}
                </span>
                Prioritized improvements instead of ad-hoc firefighting.
              </li>
              <li>
                <span className="text4 text-primary2">On-call windows: </span>{" "}
                Agreed coverage hours with clear severity tiers.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Health reviews:{" "}
                </span>
                Latency, errors, and cost trends surfaced before users complain.
              </li>
              <li>
                <span className="text4 text-primary2">Scale planning: </span>{" "}
                Capacity and licensing forecasts tied to your growth curves.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Preventive fixes:{" "}
                </span>
                Dependency and security patches on a schedule you approve.
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <img
              loading="lazy"
              src={img3}
              alt="Ongoing Support"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="z-[-2] bg-white text-black py-14 relative overflow-hidden">
        <div
          data-aos="fade-down-right"
          className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
        ></div>
        <div
          data-aos="fade-up-right"
          className="z-[-1] w-[15rem] h-[20rem] rounded-t-[6rem] bg-gradient-to-b from-primary to-transparent absolute bottom-[-2rem] right-[-2rem] drop-shadow-2xl"
        ></div>
        <div className="wrapper grid md:grid-cols-[40%_1fr] items-center gap-7">
          <div data-aos="fade-right" className="">
            <img
              loading="lazy"
              src={img4}
              alt="Partnership Beyond Projects"
              className="object-contain w-full"
            />
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Partnership beyond the statement of work</h3>
            <p className="desc">
              When the project checkbox flips to done, we still think in quarters:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Roadmap hygiene: </span>
                Quarterly reviews of what shipped, what stalled, and why.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Executive readouts:{" "}
                </span>{" "}
                Metrics your leadership can repeat without translation.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Capability transfer:{" "}
                </span>{" "}
                Pairing and docs so your hires ramp without archaeology.
              </li>
              <li>
                <span className="text4 text-primary2"> Priority lane: </span>{" "}
                Reserved capacity for urgent fixes when you need it.
              </li>
              <li>
                <span className="text4 text-primary2">Tech radar: </span>{" "}
                Honest notes on tools worth adopting—or ignoring.
              </li>
              <li>
                <span className="text4 text-primary2">Team elasticity: </span>{" "}
                Scale specialist pods up or down as initiatives shift.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="py-14 bg-white text-black relative overflow-hidden z-0">
        <div
          data-aos="fade-down"
          className="absolute z-[-1] top-[-3rem] lef-[-3rem] h-[18rem] w-[8rem] bg-primary rounded-ee-[8rem]"
        />
        <div className="wrapper relative text-center space-y-3">
          <div
            data-aos="fade-up-right"
            className="z-[-1] w-[6rem] h-[6rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-full right-[15%] drop-shadow-2xl"
          ></div>
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Vision
          </h2>
          <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
            To be the engineering partner product leaders trust when stakes are
            high: regulated data, live revenue, or creative IP on a deadline. We
            want KOLTA TECHNOLOGIES synonymous with dependable delivery—where
            specifications, observability, and kindness to maintainers matter as
            much as launch-day headlines.
          </p>
        </div>
        <div className="wrapper py-16 text-center">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Future Goals
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <div className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full">
                  <div className="pb-7 text-primary group-hover:text-black">
                    {item.icon}
                  </div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm2 isDark={true} />
    </>
  );
};

export default AboutUs;
