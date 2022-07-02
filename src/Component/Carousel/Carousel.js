import { useRef, useState, useEffect } from "react"
import CarouselImg from "./CarouselImg"
import CarouselControl from "./CarouselControl"
import CarouselIndicators from "./CarouselIndicators"
import "./Carousel.css"

export default function Carousel({
  slides,
  interval = 5000,
  controls = false,
  indicators = false,
  autoPlay = true,
  height
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef()

  const prev = () => {
    startSlideTimer()
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
    setCurrentSlide(index)
  }

  const next = () => {
    startSlideTimer()
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  const switchIndex = (index) => {
    startSlideTimer()
    setCurrentSlide(index)
  }

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer()
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        )
      }, interval)
    }
  }

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }

  useEffect(() => {
    startSlideTimer()

    return () => stopSlideTimer()
  }, [])

  return (
    <div className="carousel" style={{height: `${height}`}}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselImg
            slide={slide}
            key={index}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
      {indicators && (
        <CarouselIndicators
          slides={slides}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />
      )}
      {controls && <CarouselControl prev={prev} next={next} />}
    </div>
  )
}
