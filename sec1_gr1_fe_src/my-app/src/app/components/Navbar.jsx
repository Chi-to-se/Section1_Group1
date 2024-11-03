import Image from "next/image";


export default function Navbar() {
  return (
    <div className="bg-white flex justify-between items-center m-auto" >
      <div>
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />
      </div>
      <div className="flex gap-4 mr-6">
        <div className="bg-[#D9D9D9] w-20 rounded-3xl flex justify-center">
        <Image src="/search.svg" width={35} height={35} alt="Seach"/>
        </div>
        <Image src="/account_circle.svg" width={35} height={35} alt="Account" />
        <Image src="/settings.svg" width={35} height={35} alt="Settings" />
      </div>
    </div>
  );
}