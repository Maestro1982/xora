import { Element } from "react-scroll";
import { motion } from "framer-motion";

import { faq, featureParagrah, featureTitle } from "../constants/index.jsx";

import FaqItem from "../components/FaqItem.jsx";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect.jsx";
import { TextGenerateEffectParagraph } from "../components/ui/TextGenerateEffectParagraph.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <motion.div
          className="container z-2 py-28"
          initial={{ opacity: 0 }} // Initial state before coming into view
          whileInView={{ opacity: 1 }} // Animate when in view
          transition={{ duration: 2 }} // Animation duration
        >
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              <TextGenerateEffect
                duration={4}
                filter={true}
                words={featureTitle}
              />
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              <TextGenerateEffectParagraph
                duration={6}
                filter={true}
                words={featureParagrah}
              />
            </p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </motion.div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>
            <div className="flex-1 relative pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index + 1} />
              ))}
            </div>
            <div className="flex-1 relative lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  index={halfLength + index + 1}
                />
              ))}
            </div>
          </div>
          <div className="faq-line_after absolute left-[calc(50%-1px)] -z-1 top-0 w-0.5 h-full bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
