"use client";
import Button from "@/components/Button";
import FeatureBlock from "@/components/FeatureBlock";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import { features, featuresBlock } from "@/constants/features";
import Image from "next/image";

const Services = () => {
  return (
    <section
      id="features"
      className="relative container flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
    >
      {/* Part 1 */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
          <Heading title="Custom Software Development:" />
          <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
          At Tech Innovate, we specialize in crafting custom software solutions
          tailored to meet the unique needs of our clients. Whether you require a web application,
          mobile app, or enterprise software, our team of experienced developers will work closely
          with you to design and build a solution that aligns with your business goals.
          </p>
          <Button>get started</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
          {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
        </div>
      </div>
      {/* Part 1 */}

      {/* Part 2 */}
      {featuresBlock.map((item, index) => (
      <FeatureBlock key={index} {...item} />
    ))}
      {/* Part 2 */}
    </section>
  );
};

export default Services;
