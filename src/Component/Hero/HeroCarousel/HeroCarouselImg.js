export default function HeroCarouselImg({ slide, startSlide, height }) {
  return (
    <div
      className="carouselImg"
      onMouseOut={startSlide}
    >
      <img src={slide} alt="" style={{ width: "100%", height: `${height}`, objectFit: "cover"}} />
    </div>
  )
}
