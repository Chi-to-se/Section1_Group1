import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-start py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
      <div className="translate-x-8 -translate-y-10 grid grid-cols-2 gap-4">
        {/* Title Section */}
        <h1 className="text-5xl font-serif space-y-8">
          <p>Popular Styles </p>
          <p>Right Now </p>
          <p className="text-sm font-mono space-y-8">Make our most beloved looks your own.</p></h1>
      </div>

      {/* Products Section */}
      <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide px-2">
      <div className="flex items-center justify-center gap-x-5 gap-y-5">
        <div className="text-center">
          <div className="w-[400px] h-[700px] bg-white rounded-sm mb-2"></div>
          <p className="text-lg font-mono space-y-8">Women's Textured Gray Suit $199</p>
        </div>

        <div className="text-center">
          <div className="w-[400px] h-[700px] bg-white rounded-sm mb-2"></div>
          <p className="text-lg font-mono space-y-8">Men's Brilliant Blue Suit $199</p>
        </div>

        <div className="text-center">
          <div className="w-[400px] h-[700px] bg-white rounded-sm mb-2"></div>
          <p className="text-lg font-mono space-y-8">Women's Tan Suit $244</p>
        </div>
      </div>
    </div>
    </div>








  )
}
