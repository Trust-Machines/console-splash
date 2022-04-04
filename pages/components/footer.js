import LogoFull from './logo-full';


export default function Footer () {
  return (
    <footer className="relative z-10">
      <div className="sm:fixed sm:inset-x-0 sm:bottom-0 sm:mt-0">
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
    </footer>
  )
}

