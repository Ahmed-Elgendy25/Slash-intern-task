import Link from 'next/link';

function Navbar() {
  return (
    <>
      <nav
        className={` flex justify-between p-5 rounded-lg text-primary  font-medium my-1 text-xl  bg-black `}
      >
        <Link href={''}>ABOUT</Link>
        <Link href={'/'}>HOME</Link>
        <Link href={'/create'}>CREATE</Link>
      </nav>
    </>
  );
}

export default Navbar;
