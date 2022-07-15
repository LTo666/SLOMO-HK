import HeroCarousel from "./HeroCarousel/HeroCarousel"
import HeroSearchBar from "./HeroSearchBar/HeroSearchBar"

export default function Hero() {
  const slides = [
    "https://picsum.photos/id/1033/1440/600",
    "https://picsum.photos/id/1037/1440/600",
    "https://picsum.photos/id/1035/1440/600",
    "https://picsum.photos/id/1036/1440/600",
  ]

  return (
    <div className="relative">
      <HeroCarousel slides={slides} controls indicators autoPlay height="500px" interval={slides.length * 2000} />
      <div className="wrapper">
        <div className="relative w-[100%] h-[500px] z-10">
          <div className="absolute text-[white] ml-2" style={{ top: "130px" }}>
            <p
              className="text-[4rem]"
              style={{ textShadow: "2px 2px 8px black" }}
            >
              你的旅程起行於此
            </p>
            <p
              className="text-[1.25rem] pb-[1.5rem]"
              style={{ textShadow: "2px 2px 6px black" }}
            >
              無論是精彩歷險或休閒生活，為你提供無窮無盡的歡樂體驗
            </p>
            <HeroSearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}
