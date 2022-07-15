
function ProductDetail({
  name,
  description,
  category,
  location,
  star,
  joined,
  comment,
  photos
}) {
  const locationSVG = (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 321.883 321.883"
      width="1.25rem"
      fill="currentColor"
    >
      <path
        d="M160.941,0c-69.035,0-125,55.964-125,125.001c0,69.035,85.187,196.882,125,196.882c39.813,0,125-127.847,125-196.882
	C285.941,55.964,229.977,0,160.941,0z M160.941,182.294c-36.341,0-65.801-29.46-65.801-65.802c0-36.34,29.46-65.801,65.801-65.801
	c36.341,0,65.801,29.461,65.801,65.801C226.742,152.834,197.282,182.294,160.941,182.294z"
      />
    </svg>
  )

  const starSVG = (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 329.942 329.942"
      width="1rem"
      fill="currentColor"
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
  )

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
    <div className="rounded-xl flex items-center space-x-4">
      <div>
        <div className="text-4xl leading-[3rem] font-semibold mb-8">{name}</div>

        <div className="flex flex-row items-center space-x-4 text-base my-4">
          <span className="flex items-center text-zinc-400">
            <span className="mr-2">{locationSVG}</span>

            {location.length > 3
              ? `${location[0]}${location[1]} - ${location[2]} 及 ${location[3]}`
              : `${location[0]}${location[1]} - ${location[2]}`}
          </span>

          {category.map((eachCategory) => (
            <span
              key={eachCategory}
              className="text-sm text-primary border-[1px] border-primary rounded-full px-3 hover:bg-primary hover:text-white cursor-default"
            >
              {eachCategory}
            </span>
          ))}
        </div>

        <div className="flex flex-row pb-8  text-primary" style={{borderBottom: "0.2px solid lightgray"}}>
          {starSVG}
          <span className="pl-1">
            {star}
            <span className="text-zinc-400">{` (${sortingComment(
              comment
            )}則評價) | ${sortingJoined(joined)}+ 人參加過`}</span>
          </span>
        </div>

        <p className="py-8 text-zinc-600 text-xl" >{description}</p>

        <div className="text-2xl font-semibold my-8">活動介紹</div>
        <div>
          {photos.map((link, id)=> {
            return <img src={link} alt="" className="w-full h-[30rem] mb-4" key={id}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
