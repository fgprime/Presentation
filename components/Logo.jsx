import LogoSource from "../public/vercel.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute right-16 top-16 w-32">
      <Image
        src={LogoSource}
        style={{
          filter: "invert(100%) sepia(100%) saturate(100%) hue-rotate(180deg)",
        }}
        alt="Logo"
      />
    </div>
  );
}
