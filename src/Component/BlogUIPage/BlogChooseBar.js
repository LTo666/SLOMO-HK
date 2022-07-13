import { useNavigate } from "react-router-dom"

export default function BlogChooseBar({ blogData }) {
  const navigate = useNavigate()

  const allTimeBarsArray = blogData && blogData.map((item) => item.postTime)

  const uniqTimeBarsArray =
    allTimeBarsArray &&
    allTimeBarsArray.filter(
      (item, pos) => parseInt(allTimeBarsArray.indexOf(item)) === parseInt(pos)
    )

  const timeCollapseElem =
    uniqTimeBarsArray &&
    uniqTimeBarsArray.map((item, id) => {
      const specificTime = item
      return (
        <div
          className="collapse collapse-arrow rounded-box transition-all duration-300 ease-out"
          key={id}
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium transition-all duration-300 ease-out">
            {item}
          </div>
          <div className="collapse-content transition-all duration-300 ease-out">
            {blogData &&
              blogData
                .filter((item) => item.postTime === specificTime)
                .map((item, index) => {
                  return (
                    <div
                      className="btn btn-ghost w-full px-6 py-4 rounded-[1rem] justify-start font-normal"
                      key={index}
                      onClick={() => {
                        navigate(`blog/${item.blogId}`)
                      }}
                    >
                      {item.title}
                    </div>
                  )
                })}
          </div>
        </div>
      )
    })

  return (
    <div
      className="mt-8 w-full h-[30rem] sticky top-[7rem] p-[1rem] bg-base-100 rounded-[1rem] overflow-auto"
      style={{ border: "1px solid lightgray" }}
    >
      {timeCollapseElem}
    </div>
  )
}
