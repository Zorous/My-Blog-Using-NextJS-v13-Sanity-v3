import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
    <div className="flex items-center space-x-2"
>
        <Link href="/">
            <Image
            src="https://drive.google.com/uc?export=view&id=135irg_JPEKXmJFIchtAWBLPHkUOu4o7c"
            width={50}
            height={50}
            alt="logo"
            />
        </Link>
       <h1>Oussama Belhadi</h1>
    </div>
    <div>
        <Link href="https://oussama-belhadi.netlify.app/"
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#0fbcf9] flex items-center rounded-full">
            My Portfolio
        </Link>
    </div>

    </header>
  )
}

export default Header