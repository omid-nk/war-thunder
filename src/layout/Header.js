import Image from "next/image";

export function Header() {
  return (
    <div className="fixed z-50 left-0 right-0 top-0 backdrop-blur-sm">
      {/* top */}
      <div className="bg-gray-950 w-full h-10 flex justify-between items-center px-4">
        {/* left */}
        <div className="flex gap-4 items-center">
          <Image
            src="/svgs/icon-gjn.svg"
            width={15}
            height={15}
            alt="svg logo gijin"
          />
          <ul className="flex gap-4 text-xs text-gray-400">
            <li className="uppercase transition-colors cursor-pointer hover:text-white">
              games
            </li>
            <li className="uppercase transition-colors cursor-pointer hover:text-white">
              store
            </li>
            <li className="uppercase transition-colors cursor-pointer hover:text-white">
              support
            </li>
            <li className="uppercase transition-colors cursor-pointer hover:text-white">
              search
            </li>
          </ul>
        </div>
        {/* right */}
        <div>
          <p className="text-sm text-gray-300 transition-colors cursor-pointer hover:text-white">
            Sign in
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full h-36 bg-black/40 flex justify-center items-center">
        <div className="max-w-7xl p-2 flex items-center gap-8">
          <Image
            src="/svgs/logo-warthunder-new.svg"
            width={212}
            height={0}
            alt="logo"
          />
          <ul className="flex gap-6 text-lg text-gray-200">
            <li className="uppercase cursor-pointer transition-all hover:text-white hover:text-shadow-lg text-shadow-white/25">
              game
            </li>
            <li className="uppercase cursor-pointer transition-all hover:text-white hover:text-shadow-lg text-shadow-white/25">
              media
            </li>
            <li className="uppercase cursor-pointer transition-all hover:text-white hover:text-shadow-lg text-shadow-white/25">
              tutorials
            </li>
            <li className="uppercase cursor-pointer transition-all hover:text-white hover:text-shadow-lg text-shadow-white/25">
              workshop
            </li>
            <li className="uppercase cursor-pointer transition-all hover:text-white hover:text-shadow-lg text-shadow-white/25">
              community
            </li>
            <li className="uppercase cursor-pointer transition-all hover:text-white hover:text-shadow-lg text-shadow-white/25">
              esports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
