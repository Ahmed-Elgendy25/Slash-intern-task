'use client';
import { PostsTyped } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
function HomeComponent({ posts }: { posts: PostsTyped[] }) {
  return (
    <section className="bg-black rounded-lg w-screen min-h-screen overflow-hidden  ">
      {/* wrapper */}
      <div className=" grid md:grid-cols-2 md:gap-36 gap-y-64  md:grid-rows-2 grid-rows-4   ">
        {/* element */}

        {posts.map((post) => {
          return (
            <motion.div
              className=" p-5  "
              key={post.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              <div className="img mx-auto md:h-2/3 h-3/4 ">
                <Image
                  src={post.url_cover}
                  alt={post.title}
                  width={900}
                  height={900}
                  className="h-full  object-cover object-center"
                />
                <div className="text-primary mt-3 w-full  ">
                  {/* <span className="text-5xl block my-5 ">Music:</span> */}
                  <p className="text-6xl inline-blockp-3  relative">
                    {post.title}

                    <Link href={'/' + post.id}>
                      <FiArrowUpRight
                        size={'2rem'}
                        className=" absolute right-3 bottom-2 bg-[#53FA10] text-black border border-black rounded-full "
                      />
                    </Link>
                  </p>
                </div>
              </div>

              <svg className="svg ">
                <clipPath id="clip" clipPathUnits="objectBoundingBox">
                  <path d="M0.914,0 H0 V1 H1 V0.11 L0.914,0"></path>
                </clipPath>
              </svg>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeComponent;
