export default function CarouselImg({ slide, stopSlide, startSlide, height }) {
  return (
    <div
      className="carousel-img"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img src={slide} alt="" style={{ width: "100%", height: `${height}`, objectFit: "cover"}} />
    </div>
  )
}
