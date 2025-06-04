import { DotBg } from "@/components/DotBg";
import { FooterLinks } from "@/components/FooterLinks";
import { User } from "@/components/Projects/User";

export default function Home() {
  return (
    <div className="relative text-black flex h-screen flex-col items-center justify-between py-24">
      <div className="absolute inset-0">
        <DotBg />
      </div>
      <div className="flex items-center justify-between flex-col mx-auto relative z-10 h-full w-full text-center select-none">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="font-gloria text-center md:text-3xl text-xl max-w-md ">
            Hey Hey Kush Chaudharys Dev Den, Come Build Something Awesome :)
          </h1>
        </div>
        <User />
      </div>

      <div className=" max-w-lg mx-auto text-[15px] ">
        <p className="font-farro text-center text-neutral-600 leading-5">
          Yo, I’m Kush Chaudhary – a Full-Stack Developer who thrives on turning
          ideas into slick, functional apps. I’ve got a knack for both front-end
          flair and back-end grit, and I’m currently cooking up projects like
          CrossPostHub, Voxer, and Deployer101. From social media tools to video
          transcoding and deployment magic, I’m here to make the web work
          better. Let’s create something epic together!
        </p>

        <FooterLinks />
      </div>
    </div>
  );
}
