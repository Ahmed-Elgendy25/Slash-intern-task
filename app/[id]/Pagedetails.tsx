'use client';

import Image from 'next/image';
import {
  Kanit,
  Playfair_Display_SC as PlayfairDisplay,
} from 'next/font/google';
import { PostsTyped } from '@/types/type';

import { motion } from 'framer-motion';
const Playfair_Display_SC = PlayfairDisplay({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});
function Pagedetails({ post }: { post: PostsTyped }) {
  return (
    <section className={` bg-black text-primary min-h-screen overflow-hidden`}>
      <Image
        src={post.url_image}
        alt="MarwanPablo"
        width={900}
        height={900}
        className="mx-auto"
        objectFit="fill"
      />

      <h1
        className={` ${Playfair_Display_SC.className}   text-center text-balance mx-auto  text-4xl font-bold my-28`}
      >
        {post.title}
      </h1>
      <article className={`text-balance  `}>
        <p
          className={` my-3   w-3/4 md:mx-auto  text-white  ${Playfair_Display_SC.className}  text-5xl  leading-relaxed  `}
        >
          {post.body}
        </p>
      </article>
    </section>
  );
}

export default Pagedetails;
