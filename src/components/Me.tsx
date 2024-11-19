import { motion } from "framer-motion";

export default function Me() {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ duration: 0.3 }}
          whileHover={{scale: 1.05}}
          className="rounded-full md:h-96 md:w-96 h-72 w-72 mx-auto md:mb-0 mb-10 overflow-hidden"
        >
          <img className="h-full w-full object-cover" src="/me.jpg" alt="me" />
        </motion.div>
        <div className="text-beige text-center md:text-left">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:text-7xl text-5xl font-bold"
          >
            <motion.span
              initial={{opacity: 1}}
              animate={{ rotateX : 360 }}
              transition={{ duration: 1, ease :"linear" }}
            >
              !
            </motion.span>
            This is Kush Chaudhary
          </motion.h1>
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-3 md::text-lg text-base font-mono"
          >
            I turn vision into reality with code. Whether I'm working on a
            website or any digital product, I bring my commitment to design
            excellence and user-centered thinking to every project I work on.
          </motion.p>
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-3 text-sm md:text-base"
          >
            Explore my latest projects showcasing my expertise in Reactjs,
            Nextjs, Javascript, Typescript, PostgreSQL, Prisma, Express, MongoDB
            and more...
          </motion.p>
          <div className="flex gap-2 items-center justify-end pt-4">
            <img
              className="w-8 "
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png"
              alt="indian"
            />
            <h1 className="text-xs font-mono">Aligarh, India</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
