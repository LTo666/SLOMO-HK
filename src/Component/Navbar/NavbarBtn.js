
export default function NavbarBtn({ ctn }) {
  const switchClass = `btn rounded-full transition-all duration-300 ease-out `

  const navBarBtnClass =
    ctn === "登入" || ctn === "登出"
      ? switchClass + "btn-primary"
      : switchClass + "btn-ghost"
  
  return <div className={navBarBtnClass}>{ctn}</div>
}
