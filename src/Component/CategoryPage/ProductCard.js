import style from "./ProductCard.module.css"

export default function ProductCard({
  title,
  price,
  description,
  star,
  joined,
  comment,
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
      <div className={style.ProductCard}>
        <figure className="h-[10rem] overflow-hidden relative">
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
          <div className={style.overlay}></div>
        </figure>
        <div>
          <div className={`${style.Title} mb-[0.6rem]`}>
            <strong className="text-xl" style={{ lineHeight: "1.5rem" }}>
              {title}
            </strong>
          </div>

          <div className={`${style.Title} mb-[0.4rem]`}>
            <p className="text-md" style={{ lineHeight: "1.5rem" }}>
              {description}
            </p>
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
              )}) | ${sortingJoined(joined)}+ joined`}</span>
            </p>
          </div>

          {price === 0 ? (
            <p className="text-lg font-semibold pt-[0.5rem]  ">Free</p>
          ) : (
            <p className="text-sm pt-[0.5rem]">
              HKD <span className="text-lg font-semibold  ">{price}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
