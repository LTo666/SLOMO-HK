import style from "./BloggerCard.module.css"

export default function BloggerCard({ profilepic, banner, name, intro }) {
  return (
    <div
      className="overflow-hidden rounded-[1rem] w-[32rem] h-full bg-base-100 hover:shadow-lg transition-all duration-300 cursor-pointer hover:translate-y-[-0.25rem]"
      style={{ border: "0.5px solid lightgray" }}
    >
      <img className="w-full h-[10rem] object-cover" src={banner} alt="" />

      <div className="relative mx-10 pb-6">
        <div className="absolute top-[-3rem] aspect-square rounded-full overflow-hidden ring ring-base-100">
          <img
            className="w-[6rem] h-full object-cover"
            src={profilepic}
            alt=""
          />
        </div>
        <div className={"pt-3 " + style.TextOverflow}>
          <h6 className="text-[1.5rem] font-semibold text-end pb-3 pr-8">
            {name}
          </h6>
          <p className="text-[1rem] text-zinc-600">{intro}</p>
        </div>
      </div>
    </div>
  )
}
