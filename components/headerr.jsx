import Logo from '@/components/logo'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
export default function Headerr() {
  return (
    <header className='sticky top-0 bg-white z-10 shadow'>
       <div className='conatiner mx-auto p-4 flex justify-between space-x-2 gap-4'>
         <Logo/>
         <Link href='/cart' className='flex items-center space-x-1 text-gray-700 hover:text-gray-900'>
            <div className='relative flex'>
                <ShoppingCartIcon className='w-7 h-7 flex-shrink-0'/>

                <p className='text-lg'>
                  $0.00{" "}
                  <span className='text-sm text-gray-500'>(0)</span>
                </p>
            </div>
         </Link>
       </div>
    </header>
  )
}
