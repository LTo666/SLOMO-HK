
export default function CatCard({ title, img }) {
  const divClassName =
    "border-solid border-[1px] cursor-pointer w-full aspect-square rounded-[1rem] overflow-hidden hover:scale-110 hover:shadow-2xl transition-all duration-300"

  return (
    <div className={divClassName}>
      <img
        src={img}
        alt=""
        className="w-full h-[75%] object-cover"
      />

      <div className="h-[25%] flex pl-[15%] justify-start items-center font-medium">
        <span className="text-base">{title}</span>
      </div>
    </div>
  )
}
