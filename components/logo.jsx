import Link from 'next/link'
import Image from 'next/image'
export default function Logo() {
  return (
    <Link href='/' className='flex items-center'>
        <Image src='/public/logo.svg' alt='logo' width={42} height={42}/> {"  "}
        <span className='hidden sm:inline-block font-extrabold text-[25px] text-gray-700'>Jew Store</span>
    </Link>
  )
}
