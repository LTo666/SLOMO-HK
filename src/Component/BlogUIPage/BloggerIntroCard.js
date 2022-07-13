
export default function BloggerIntroCard({profile, name, intro}) {
  return (
    <div className="w-full h-[18rem] rounded-[1rem] flex flex-col py-6 px-8 bg-base-100" style={{border: "1px solid lightgray"}}>
      <img src={profile} alt="" className="w-[8rem] h-[8rem] aspect-square rounded-full self-center object-cover"/>
      <div className="py-2 self-center text-2xl font-medium">{name}</div>
      <div className="justify-self-end text-start text-zinc-600">簡介：{intro}</div>
    </div>
  )
}
