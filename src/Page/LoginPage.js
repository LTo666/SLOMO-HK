import LoginForm from "../Component/LoginPage.js/LoginForm"

export default function LoginPage({ signup }) {
  return (
    <div className="bg-base-200">
      <div className="wrapper">
        <div className="w-full h-full flex justify-center py-[4rem]">
          <LoginForm signup={signup} />
        </div>
      </div>
    </div>
  )
}
