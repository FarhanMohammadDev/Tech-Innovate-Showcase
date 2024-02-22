"use client";
import Lottie from "lottie-react";
import hero from "../lottie/Animation-hero.json";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Link from 'next/link';
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <Lottie animationData={Entrance} /> */}
      <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
        <div className="relative container">
          <section id="home" className="relative">
            <div className="flex flex-col text-center space-y-12">
              <div className="flex flex-col items-center space-y-6">
                <p
                  className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl
                  cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md
                  transition-all"
                >
                  new features is now available.
                  <ArrowRightCircle className="inline ml-1 w-4 h-4" />
                </p>
                <Heading title=" Welcome to Tech Innovate" />
                <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Tech Innovate is a leading technology company dedicated to
                innovation and excellence. We specialize in providing cutting-edge
                solutions in various domains, ranging from software development to
                artificial intelligence.
                </p>
              <div className="flex items-center gap-4">
                <Button>
                  get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="portfolio">
                  <Button variant="outline">view portfolio</Button>
                </Link>
              </div>

              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
