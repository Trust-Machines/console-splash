import Image from 'next/image';
import LogoFull from './logo-full';


export default function Footer () {
  return (
    <footer>
      <div className="fixed inset-x-0 bottom-0">
        <div className="w-screen h-[206px] absolute left-0 bottom-0">
          <Image src="/footer-slice.png" alt="" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className="relative">
          <div className="px-6 py-10 mx-auto sm:px-16 max-w-8xl">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-1">
                <LogoFull />
              </div>
              <div className="flex-shrink-0 w-full mt-4 text-white/50 sm:mt-0 sm:w-auto text-[0.9375rem]">
                ©&nbsp;2022 Trust Machines. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

