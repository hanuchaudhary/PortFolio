export default function About() {
  return (
    <div className="bg-darkBeige h-screen pt-40 w-full md:px-40 px-2">
      <div className="grid grid-cols-2">
        <div className="rounded-full h-96 w-96 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/WxYdFgQKdckiTMN8FssskATYtZ4oyiE1ruf6Q6VWMhjqBA61YWD0PZVreQ0m6VSh5bfiKdniXqMNw6RvNA=w544-h544-l90-rj"
            alt=""
          />
        </div>
        <div className="text-beige">
          <h1 className="text-7xl font-bold">This is Kush Chaudhary</h1>
          <p className="pt-3 text-lg font-mono">
            I turn vision into reality with code. Whether I'm working on a
            website or any digital product, I bring my commitment to design
            excellence and user-centered thinking to every project I work on.
          </p>
          <p className="pt-3">
            Explore my latest projects showcasing my expertise in Reactjs,
            Nextjs, Javascript, Typescript, PostgreSQL, Prisma, Drizzle, MongoDB
            and more...
          </p>
          <div className="flex gap-2 items-center justify-end pt-4">
            <img
            className="w-8 "
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png"
              alt="indian"
            />
            <h1 className="text-base">Aligarh, India</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
