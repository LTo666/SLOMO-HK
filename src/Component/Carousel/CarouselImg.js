export default function CarouselImg ({ slide, stopSlide, startSlide }) {
  return (
    <div className="carousel-img" onMouseEnter={stopSlide} onMouseOut={startSlide}>
        <img src={slide} alt="" />
    </div>
)
}