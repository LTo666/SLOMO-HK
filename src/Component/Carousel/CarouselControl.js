export default function CarouselControl({ prev, next }) {
  return (
    <div>
      <div className="carousel-control left" onClick={prev}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="2rem"
          fill="#ffffff"
        >
          <path
            d="M328.2,53.3c-23.8,23.8-47.6,47.6-71.4,71.4s-47.6,47.6-71.4,71.4c-13.5,13.5-26.9,26.9-40.4,40.4
              c-10.5,10.5-10.5,28.4,0,38.9c23.8,23.8,47.6,47.6,71.4,71.4s47.6,47.6,71.4,71.4c13.5,13.5,26.9,26.9,40.4,40.4
              c5,5,12.4,8.1,19.4,8.1c3.8,0.1,7.3-0.6,10.6-2.4c3.4-1.1,6.4-3,8.9-5.7c4.8-5.2,8.4-12.1,8.1-19.4c-0.3-7.3-2.8-14.2-8.1-19.4
              c-23.8-23.8-47.6-47.6-71.4-71.4c-23.8-23.8-47.6-47.6-71.4-71.4c-13.5-13.5-26.9-26.9-40.4-40.4c0,13,0,25.9,0,38.9
              c23.8-23.8,47.6-47.6,71.4-71.4s47.6-47.6,71.4-71.4c13.5-13.5,26.9-26.9,40.4-40.4c5-5,8.1-12.4,8.1-19.4
              c0.1-3.8-0.6-7.3-2.4-10.6c-1.1-3.4-3-6.4-5.7-8.9c-5.2-4.8-12.1-8.4-19.4-8.1C340.3,45.6,333.4,48.1,328.2,53.3L328.2,53.3z"
          />
        </svg>
      </div>
      <div className="carousel-control right" onClick={next}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="2rem"
          fill="#ffffff"
        >
          <path
            d="M183.8,458.7c23.8-23.8,47.6-47.6,71.4-71.4s47.6-47.6,71.4-71.4c13.5-13.5,26.9-26.9,40.4-40.4
              c10.5-10.5,10.5-28.4,0-38.9c-23.8-23.8-47.6-47.6-71.4-71.4s-47.6-47.6-71.4-71.4c-13.5-13.5-26.9-26.9-40.4-40.4
              c-5-5-12.4-8.1-19.4-8.1c-3.8-0.1-7.3,0.6-10.6,2.4c-3.4,1.1-6.4,3-8.9,5.7c-4.8,5.2-8.4,12.1-8.1,19.4
              c0.3,7.3,2.8,14.2,8.1,19.4c23.8,23.8,47.6,47.6,71.4,71.4s47.6,47.6,71.4,71.4c13.5,13.5,26.9,26.9,40.4,40.4
              c0-13,0-25.9,0-38.9c-23.8,23.8-47.6,47.6-71.4,71.4c-23.8,23.8-47.6,47.6-71.4,71.4c-13.5,13.5-26.9,26.9-40.4,40.4
              c-5,5-8.1,12.4-8.1,19.4c-0.1,3.8,0.6,7.3,2.4,10.6c1.1,3.4,3,6.4,5.7,8.9c5.2,4.8,12.1,8.4,19.4,8.1
              C171.7,466.4,178.6,463.9,183.8,458.7L183.8,458.7z"
          />
        </svg>
      </div>
    </div>
  )
}
