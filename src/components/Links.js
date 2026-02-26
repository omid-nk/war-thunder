import Image from "next/image";

export function Links() {
  return (
    <div className="w-full flex-wrap bg-mist-950 py-6 px-2 border-y border-mist-800 my-12 flex gap-2 items-center justify-center">
      <div className=" relative brightness-125 hover:-translate-y-1 transition-all border border-mist-800 hover:border-mist-600 cursor-pointer">
        <Image
          src="/image/quick-link__about.jpg"
          width={260}
          height={0}
          alt="quick link about"
        />
        <span className="absolute bottom-0 left-0 right-0 top-0  bg-linear-to-t from-mist-900 via-mist-900/90 via-25%" />
        <span className="bg-mist-800 absolute top-0 left-0 bottom-0 right-0 mix-blend-color hover:opacity-0 transition-all" />
        <p className="absolute bottom-2 left-3 text-xl uppercase font-medium text-gray-300">
          about the game
        </p>
      </div>
      <div className=" relative brightness-125 hover:-translate-y-1 transition-all border border-mist-800 hover:border-mist-600 cursor-pointer">
        <Image
          src="/image/quick-link__start-guide.jpg"
          width={260}
          height={0}
          alt="quick link about"
        />
        <span className="absolute bottom-0 left-0 right-0 top-0  bg-linear-to-t from-mist-900 via-mist-900/90 via-25%" />
        <span className="bg-mist-800 absolute top-0 left-0 bottom-0 right-0 mix-blend-color hover:opacity-0 transition-all" />
        <p className="absolute bottom-2 left-3 text-xl uppercase font-medium text-gray-300">
          tutorials
        </p>
      </div>
      <div className=" relative brightness-125 hover:-translate-y-1 transition-all border border-mist-800 hover:border-mist-600 cursor-pointer">
        <Image
          src="/image/quick-link__community.jpg"
          width={260}
          height={0}
          alt="quick link about"
        />
        <span className="absolute bottom-0 left-0 right-0 top-0  bg-linear-to-t from-mist-900 via-mist-900/90 via-25%" />
        <span className="bg-mist-800 absolute top-0 left-0 bottom-0 right-0 mix-blend-color hover:opacity-0 transition-all" />
        <p className="absolute bottom-2 left-3 text-xl uppercase font-medium text-gray-300">
          community
        </p>
      </div>
      <div className=" relative brightness-125 hover:-translate-y-1 transition-all border border-mist-800 hover:border-mist-600 cursor-pointer">
        <Image
          src="/image/quick-link__wiki.jpg"
          width={260}
          height={0}
          alt="quick link about"
        />
        <span className="absolute bottom-0 left-0 right-0 top-0  bg-linear-to-t from-mist-900 via-mist-900/90 via-25%" />
        <span className="bg-mist-800 absolute top-0 left-0 bottom-0 right-0 mix-blend-color hover:opacity-0 transition-all" />
        <p className="absolute bottom-2 left-3 text-xl uppercase font-medium text-gray-300">
          wiki
        </p>
      </div>
    </div>
  );
}
