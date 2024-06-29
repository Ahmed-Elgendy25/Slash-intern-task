import Image from 'next/image';
import {
  Kanit,
  Playfair_Display_SC as PlayfairDisplay,
} from 'next/font/google';
const Playfair_Display_SC = PlayfairDisplay({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

import Marwan_Pablo from '/public/Marwan_Pablo/TLPOA (1).jpg';
function BlogDetails() {
  return (
    <section className={` bg-black text-primary h-auto overflow-hidden`}>
      <Image
        src={Marwan_Pablo}
        alt="MarwanPablo"
        className="mx-auto"
        objectFit="fill"
      />

      <article className={` text-wrap bg-red-400`}>
        <h1
          className={` ${Playfair_Display_SC.className} bg-yellow-300 text-center  text-8xl font-bold my-5`}
        >
          Marwan Pablo
        </h1>
        <p className="bg-purple-400 my-3  w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, natus?
          Explicabo minima, nostrum, quisquam, a nesciunt eveniet autem cumque
          libero placeat repellendus temporibus quaerat possimus nam esse quam
          rem maiores. Fugit quisquam nam obcaecati voluptatem veniam est
          doloribus illo, quasi possimus eveniet accusantium? Animi consequuntur
          assumenda atque, natus at saepe deleniti, quod sint quae corrupti
          quisquam! Vero voluptatibus ducimus dolores? Atque omnis
          necessitatibus vel molestiae mollitia saepe voluptas debitis, iure,
          ipsam velit neque vero hic consectetur! Explicabo ratione quae atque
          facilis excepturi, pariatur, debitis voluptate repudiandae alias autem
          praesentium voluptates? Aut quia, minima, reiciendis fuga excepturi
          totam aperiam iusto eum eveniet animi non. Itaque maiores unde
          expedita suscipit aliquam distinctio mollitia. Repellendus libero
          ullam atque consequatur magnam vel nesciunt quidem! Iure quis esse
          quo, pariatur autem quisquam aliquid numquam maiores odio voluptatum
          culpa commodi, officia eum atque nemo consequuntur debitis eveniet
          doloremque placeat iste. Iusto ratione laborum ab illo rem!
        </p>

        <p className="bg-purple-400 my-3  w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, natus?
          Explicabo minima, nostrum, quisquam, a nesciunt eveniet autem cumque
          libero placeat repellendus temporibus quaerat possimus nam esse quam
          rem maiores. Fugit quisquam nam obcaecati voluptatem veniam est
          doloribus illo, quasi possimus eveniet accusantium? Animi consequuntur
          assumenda atque, natus at saepe deleniti, quod sint quae corrupti
          quisquam! Vero voluptatibus ducimus dolores? Atque omnis
          necessitatibus vel molestiae mollitia saepe voluptas debitis, iure,
          ipsam velit neque vero hic consectetur! Explicabo ratione quae atque
          facilis excepturi, pariatur, debitis voluptate repudiandae alias autem
          praesentium voluptates? Aut quia, minima, reiciendis fuga excepturi
          totam aperiam iusto eum eveniet animi non. Itaque maiores unde
          expedita suscipit aliquam distinctio mollitia. Repellendus libero
          ullam atque consequatur magnam vel nesciunt quidem! Iure quis esse
          quo, pariatur autem quisquam aliquid numquam maiores odio voluptatum
          culpa commodi, officia eum atque nemo consequuntur debitis eveniet
          doloremque placeat iste. Iusto ratione laborum ab illo rem!
        </p>
      </article>
    </section>
  );
}

export default BlogDetails;
