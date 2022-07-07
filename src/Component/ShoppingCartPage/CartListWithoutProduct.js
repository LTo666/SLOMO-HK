import { useNavigate } from "react-router-dom"

export default function CartListWithoutProduct() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center w-full h-[30rem] p-[1rem]">
      <div className="rounded-full bg-base-300 p-[2rem] text-base-100">
        <svg
          version="1.1"
          id="Cart"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="8rem"
          height="8rem"
          fill="currentColor"
        >
          <path
            d="M362.7,418.6v-21.2H181.5l11.6-21.2l177.4-17.3l30.8-115.7H164.2l-13.5-57.8H92.9v19.3h42.4l40.5,161.9
	l-25.1,50.1v28.9c0,15.4,13.5,28.9,28.9,28.9s28.9-13.5,28.9-28.9s-13.5-28.9-28.9-28.9h144.6v28.9c0,15.4,13.5,28.9,28.9,28.9
	c15.4,0,28.9-13.5,28.9-28.9C382,432.1,374.3,422.4,362.7,418.6z M170,262.4h206.3L355,339.5l-161.9,17.3L170,262.4z"
          />
          <polygon
            points="318.7,131.3 310.2,122.8 262,171 262,49.8 250,49.8 250,171 201.8,122.8 193.3,131.3 249.5,187.5 
	250,187 250,187.5 262,187.5 262,187 262.5,187.5 "
          />
        </svg>
      </div>
      <div className="text-2xl pt-4 pb-8">你的購物車是空的</div>
      <div
        className="btn btn-primary btn-lg normal-case text-xl"
        onClick={() => navigate("/")}
      >
        跟著SloMo一起發掘香港精彩活動
      </div>
    </div>
  )
}
