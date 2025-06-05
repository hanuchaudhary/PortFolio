import { DotBg } from "@/components/DotBg";
import { FooterLinks } from "@/components/FooterLinks";
import { User } from "@/components/Projects/User";

export default async function Home() {
  return (
    <div className="relative text-black flex h-screen flex-col items-center justify-between py-24">
      <div className="absolute inset-0">
        <DotBg />
      </div>
      <div className="flex items-center justify-between flex-col mx-auto relative z-10 h-full w-full text-center select-none">
        <h1 className="font-gloria text-center md:text-3xl text-xl max-w-md ">
          Hey Hey Kush Chaudharys Dev Den, Come Build Something Awesome :)
        </h1>
        <User />
        <div className="text-secondary-foreground md:text-base text-sm max-w-xl px-4 md:px-0 font-farro">
          Yo, I’m Kush Chaudhary – a Full-Stack Developer who thrives on turning
          ideas into slick, functional apps. I’ve got a knack for both front-end
          flair and back-end grit, and I’m currently cooking up projects like
          CrossPostHub, Voxer, and Deployer101. From social media tools to video
          transcoding and deployment magic.
        </div>
      </div>
      <FooterLinks />
    </div>
  );
}
