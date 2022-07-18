import { BsCheck2Circle } from 'react-icons/bs'
export const Product = ({ item, color }) => {
  return (
    <div className="bg-white border shadow-sm pb-5 rounded-md flex flex-col relative overflow-hidden">
      <div
        style={{ backgroundColor: color }}
        className="absolute top-[-18px] right-[-20px] text-white font-bold w-16 h-16 rounded-full text-center flex justify-center items-center text-lg pt-5 transform pr-4 font-josefin"
      >
        {item.price}$
      </div>
      <div style={{ backgroundColor: color + '40', color: color }} className="text-center py-3 tracking-wider mb-4 font-bold text-2xl  font-Oswald">
        10 GOOGLE VOICE
      </div>
      <div style={{ color: color }} className="text-2xl font-bold mb-3 px-3 space-y-1">
        <div className="flex items-center gap-2">
          <BsCheck2Circle />
          <span className="text-base text-gray-900">100% Verified Google Voice</span>
        </div>
        <div className="flex items-center gap-2">
          <BsCheck2Circle />
          <span className="text-base text-gray-900">10 Unique GV Number</span>
        </div>
        <div className="flex items-center gap-2">
          <BsCheck2Circle />
          <span className="text-base text-gray-900">Instant File Download</span>
        </div>
      </div>
      <div className="px-3">
        <a
          href={item.permalink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: color }}
          className="font-semibold block w-full text-base px-5 py-3 text-center text-white rounded font-josefin transition duration-300 transform hover:scale-95"
        >
          BUY NOW
        </a>
      </div>
    </div>
  )
}
