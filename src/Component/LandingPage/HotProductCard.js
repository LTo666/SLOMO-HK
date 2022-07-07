import style from "./HotProductCard.module.css"

export default function HotProductCard({
  title,
  price,
  star,
  joined,
  comment,
  location,
  img,
}) {
  const sortingJoined = (num) => {
    if (num > 999999) {
      return (num / 1000000).toFixed(0) + "M"
    } else if (num > 999 && num <= 999999) {
      return (num / 1000).toFixed(0) + "K"
    } else {
      return num
    }
  }

  const sortingComment = (num) => {
    if (num > 999999) {
      return (num / 1000000).toFixed(0) + "M"
    } else {
      return num
    }
  }

  return (
    <div>
      <div className={style.HotProductCard}>
        <figure className="h-[10rem] overflow-hidden relative">
          <img
            src={img}
            alt=""
            className="w-full"
          />

          <div className="absolute top-[0.6rem] left-[1rem]">
            <div className="badge badge-primary rounded-lg text-[white] text-base py-[0.8rem]">
              Hot
            </div>
          </div>

          <div className="absolute top-[0.8rem] right-[1rem] flex">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 321.883 321.883"
              width="1rem"
              fill="#ffffff"
            >
              <path
                d="M160.941,0c-69.035,0-125,55.964-125,125.001c0,69.035,85.187,196.882,125,196.882c39.813,0,125-127.847,125-196.882
              C285.941,55.964,229.977,0,160.941,0z M160.941,182.294c-36.341,0-65.801-29.46-65.801-65.802c0-36.34,29.46-65.801,65.801-65.801
              c36.341,0,65.801,29.461,65.801,65.801C226.742,152.834,197.282,182.294,160.941,182.294z"
              />
            </svg>
            <p className="pl-1 text-sm text-[white]">{location}</p>
          </div>
        </figure>

        <div>
          <div className={`${style.Title} mb-[0.6rem]`}>
            <strong className="text-xl" style={{ lineHeight: "1.5rem" }}>
              {title}
            </strong>
          </div>

          <div className="flex pb-1">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 329.942 329.942"
              width="0.8rem"
              fill="#37CDBE"
            >
              <path
                d="M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10.209l-95.822-13.922l-42.854-86.837
                c-2.527-5.12-7.742-8.362-13.451-8.362c-5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922
                c-5.65,0.821-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,67.582L57.496,305.07
                c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059
                l85.71,45.059c2.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-0.13-2.275-0.376-3.352
                l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,132.096,329.208,126.666z"
              />
            </svg>
            <p className="pl-1 text-sm text-primary">
              {star}
              <span className="text-base-content">{` (${sortingComment(
                comment
              )}) | ${sortingJoined(joined)}+ 人參加過`}</span>
            </p>
          </div>

          {price === 0 ? (
            <p className="text-lg font-semibold pt-[0.5rem]  ">免費</p>
          ) : (
            <p className="text-sm pt-[0.5rem]">
              HK$ <span className="text-lg font-semibold  ">{price}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
