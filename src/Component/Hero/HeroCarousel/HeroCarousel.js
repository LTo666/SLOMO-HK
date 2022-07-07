import { useRef, useState, useEffect } from "react"
import HeroCarouselImg from "./HeroCarouselImg"
import HeroCarouselControl from "./HeroCarouselControl"
import "./HeroCarousel.css"

export default function HeroCarousel({
  slides,
  interval = 5000,
  controls = false,
  indicators = false,
  autoPlay = true,
  height,
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
    <div className="absolute">
      <div
        className="carousel"
        style={{ height: `${height}`, minWidth: "100%" }}
      >
        <div
          className="carouselInner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <HeroCarouselImg
              slide={slide}
              key={index}
              startSlide={startSlideTimer}
              height={height}
            />
          ))}
        </div>
        {controls && <HeroCarouselControl prev={prev} next={next} />}
      </div>
    </div>
  )
}
