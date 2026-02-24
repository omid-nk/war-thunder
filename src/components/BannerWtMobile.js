import Image from "next/image";

export function BannerWtMobile() {
  return (
    <div className="flex justify-center max-w-5xl mx-auto ">
      <div className="flex items-center gap-12 w-full bg-linear-to-r from-red-800 via-mist-800 to-blue-950 px-22 border border-mist-600 relative">
        <Image
          src="/image/wtm-banner-picture.webp"
          width={80}
          height={0}
          alt="mobile war thunder download"
          className="scale-180"
        />
        <p className="text-gray-200 uppercase text-lg">
          Play War Thunder Mobile on your phone!
        </p>
        <span className="text-gray-200 right-4 absolute cursor-pointer hover:text-white transition-all uppercase">
          Learn more{" "}
        </span>
      </div>
    </div>
  );
}
