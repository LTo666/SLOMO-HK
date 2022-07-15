import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="wrapper text-center h-[100vh] overflow-auto flex flex-col justify-center">
      <div className="text-[3rem]">你好似迷路了</div>
      <div
        className="text-md mt-4 underline underline-offset-1 hover:text-primary cursor-pointer"
        onClick={() => navigate("/")}
      >
        按此返回主頁
      </div>
    </div>
  )
}
