export default function CarouselIndicators({
  slides,
  currentIndex,
  switchIndex,
}) {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button
          className={`carousel-indicator-item${
            currentIndex === index ? " active" : ""
          }`}
          onClick={() => switchIndex(index)}
          key={index}
        ></button>
      ))}
    </div>
  )
}
