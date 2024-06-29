import Image from 'next/image';
import MarwanPablo from '/public/Marwan_Pablo/MAD LOVE ALL OVER THE PLACE.jpg';
import Yeat from '/public/Yeat/yeat-ipad-wallpaper-2063x2063-12660.jpg';
import Tul8te from '/public/Tul8te/1.jpg';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { createClient } from '@/utils/supabase/server';
export const dynamic = 'force-dynamic';
type PostsTyped = {
  id: number;
  title: string;
  body: string;
  url_image: string;
  url_cover: string;
};

async function getPosts(): Promise<PostsTyped[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('posts').select('*');
  console.log(data);
  return data || [];
}

async function Home() {
  const posts: PostsTyped[] = await getPosts();
  return (
    <section className="bg-black rounded-lg w-screen min-h-screen overflow-hidden  ">
      {/* wrapper */}
      <div className=" grid md:grid-cols-2 md:gap-36 gap-y-64  md:grid-rows-2 grid-rows-4   ">
        {/* element */}

        {posts.map((post) => {
          {
          }
          return (
            <div className=" p-5  " key={post.id}>
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;

// {/* <section className="bg-black rounded-lg w-screen h-full overflow-hidden  ">
// {/* wrapper */}
// <div className=" grid md:grid-cols-2 md:gap-36 gap-y-64  md:grid-rows-2 grid-rows-4   ">
//   {/* element */}

//   <div className=" p-5  ">
//     <div className="img mx-auto md:h-2/3 h-3/4 ">
//       <Image
//         src={MarwanPablo}
//         alt="Marwan Pablo"
//         className="h-full  object-cover object-center"
//         placeholder="blur"
//       />
//       <Link href={'/'} className="text-primary mt-3">
//         <span className="text-5xl block my-5 ">Music:</span>
//         <p className="text-6xl  ">
//           Marwan Pablo: “I Found Myself in Music”
//         </p>
//       </Link>
//     </div>

//     <svg className="svg ">
//       <clipPath id="clip" clipPathUnits="objectBoundingBox">
//         <path d="M0.914,0 H0 V1 H1 V0.11 L0.914,0"></path>
//       </clipPath>
//     </svg>
//   </div>

//   <div className=" p-5  ">
//     <div className="img w-fit mx-auto md:h-2/3 h-4/5 bg-red-400 ">
//       <Image
//         src={Tul8te}
//         alt="Yeat"
//         className="h-full  object-cover object-center"
//         placeholder="blur"
//       />
//     </div>
//     <div className="text-primary mt-3 ">
//       <span className="text-5xl block my-5 ">Music:</span>
//       <p className="text-6xl    ">
//         TUL8TE is a Cairo-based rapper and producer known for his
//         introspective lyrics and unique approach to hip-hop.
//       </p>
//     </div>
//     <svg className="svg ">
//       <clipPath id="clip" clipPathUnits="objectBoundingBox">
//         <path d="M0.914,0 H0 V1 H1 V0.11 L0.914,0"></path>
//       </clipPath>
//     </svg>
//   </div>

//   <div className=" p-5  ">
//     <div className="img w-fit mx-auto md:h-2/3 h-4/5 bg-red-400 ">
//       <Image
//         src={Yeat}
//         alt="Yeat"
//         className="h-full  object-cover object-center"
//         placeholder="blur"
//       />
//     </div>
//     <div className="text-primary mt-3 ">
//       <span className="text-5xl block my-5 ">Music:</span>
//       <p className="text-6xl    ">
//         TUL8TE is a Cairo-based rapper and producer known for his
//         introspective lyrics and unique approach to hip-hop.
//       </p>
//     </div>
//     <svg className="svg ">
//       <clipPath id="clip" clipPathUnits="objectBoundingBox">
//         <path d="M0.914,0 H0 V1 H1 V0.11 L0.914,0"></path>
//       </clipPath>
//     </svg>
//   </div>
// </div>
// </section> */}
