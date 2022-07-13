import Facebook from "../../Assets/facebook.png"
import Apple from "../../Assets/apple.png"
import Google from "../../Assets/search.png"
import style from "./ThirdPartyLogin.module.css"

export default function ThirdPartyLogin({acc}) {
  const thirdParties = [
    {name: "Facebook", img: Facebook},
    {name: "Apple", img: Apple},
    {name: "Google", img: Google},
  ]

  const filtedParty = thirdParties.find(item => item.name === acc)

  return (
    <div className={"flex flex-col w-[6rem] cursor-pointer " + style.hoverDiv}>
      <div className="flex justify-center">
        <img src={filtedParty.img} alt={filtedParty.name} className="w-[2.5rem]" />
      </div>
      <p className={"pt-2 text-lg text-center " + style.hoverP}>{filtedParty.name}</p>
    </div>
  )
}
