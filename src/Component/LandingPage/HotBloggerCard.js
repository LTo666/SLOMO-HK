export default function HotBloggerCard({ img, name}) {
  return (
    <div className="w-[17rem] aspect-square rounded-[1rem] hover:border-solid hover:border-[1px] hover:shadow-2xl transition-all duration-300">
      <div className="avatar flex justify-center pt-6">
        <div className="w-[11rem] h-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 left-[50%]">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="pt-4 text-center text-3xl">{name}</div>
    </div>
  )
}
