import Image from "next/image";
import Hero from "../../public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className="h-full  flex items-center justify-center gap-[100px]">
      <div className="flex-1 flex items-start flex-col gap-8">
        <h1 className="text-7xl font-bold hero-title">
          Better design for your digital products.
        </h1>
        <p className="text-lg">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button path="/portfolio" name="See Our Works" />
      </div>
      <div className="flex-1 flex justify-center">
        <Image src={Hero} height={400} width={400} alt="Hero Image" className="animate-img" />
      </div>
    </div>
  );
}
