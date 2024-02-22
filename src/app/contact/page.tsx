import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { MoveRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-4 text-center lg:text-start">
          <Heading title="Lets try our service now!" />
          <p className="max-w-[35rem] leading-normal text-lg">
            Experience the power of Ocean CRM dashboard for engineering teams.
            Boost productivity and streamline collaboration. Get started today!
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-md bg-slate-700 px-4 py-2 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-md bg-slate-700 px-4 py-2 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="rounded-md bg-slate-700 px-4 py-2 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          ></textarea>
          <Button>Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
