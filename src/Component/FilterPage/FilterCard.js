import Style from "./FilterCard.module.css"

export default function FilterCard({ title, location, cat, price }) {
  return (
    <div className={`${Style.TourCard}`}>
      <figure className="h-[10rem] overflow-hidden">
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div>
        <div className={Style.Title}>
          <strong className="text-xl" style={{lineHeight: "1.5rem"}}>{title}</strong>
        </div>

        <div className="flex pb-1">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 321.883 321.883"
            width="1.5rem"
            fill="#37CDBE"
          >
            <path
              d="M160.941,0c-69.035,0-125,55.964-125,125.001c0,69.035,85.187,196.882,125,196.882c39.813,0,125-127.847,125-196.882
              C285.941,55.964,229.977,0,160.941,0z M160.941,182.294c-36.341,0-65.801-29.46-65.801-65.802c0-36.34,29.46-65.801,65.801-65.801
              c36.341,0,65.801,29.461,65.801,65.801C226.742,152.834,197.282,182.294,160.941,182.294z"
            />
          </svg>
          <p className="pl-2 text-lg">{location}</p>
        </div>

        <div>
          {cat && cat.length !== 0 && cat.map((item, i) => {
            return <div className="badge badge-outline rounded-md mr-2 text-xs" key={i}>{item}</div>
          })}
        </div>

        {price === 0 ? <p className="text-lg font-semibold pt-[1.25rem]">Free</p> : <p className="text-sm pt-[1.25rem]">HKD <span className="text-lg font-semibold">{price}</span></p> }

      </div>
    </div>
  )
}