import { Element, Link as LinkScroll } from "react-scroll";

import Button from "../components/Button.jsx";
import { Vortex } from "../components/ui/Vortex.jsx";

const Hero = () => {
  return (
    <div className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full">
          <div className="container">
            <div className="relative z-2 max-w-512 max-lg:max-w-388">
              <div className="caption small-2 uppercase text-p3">
                Video Editing
              </div>
              <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                Amazingly simple
              </h1>
              <p className="max-w-440 mb-14 body-1 max-md:mb-10 max-md:text-2xl">
                We designed XORA AI Video Editor to be an easy to use, quick to
                learn and suprisingly powerful.
              </p>
              <LinkScroll to="features" offset={-100} spy smooth>
                <Button icon="/images/zap.svg">Try it now</Button>
              </LinkScroll>
            </div>

            <div className="absolute hidden md:block -top-72 md:-top-[80px] lg:-top-[220px] md:left-[calc(50%-40px)] lg:left-[calc(50%-240px)] w-[960px] pointer-events-none hero-img_res">
              <img
                src="/images/hero.png"
                alt="hero"
                className="md:size-512 lg:size-960 max-lg:h-auto"
              />
            </div>
          </div>
        </Vortex>
      </Element>
    </div>
  );
};
export default Hero;
