'use client';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-black  sm:w-screen p-3 rounded-lg">
      <div className={`text-center `}>
        <motion.h1 className=" sm:w-full lg:tracking-[6rem]  lg:text-9xl text-3xl inline-block  relative   font-bold text-center   text-primary">
          E-MAGAZINE
        </motion.h1>
      </div>
    </header>
  );
}

export default Header;
