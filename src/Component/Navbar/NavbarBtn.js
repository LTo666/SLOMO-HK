export default function NavbarBtn({ ctn, alt }) {
  const switchClass = `btn rounded-full transition-all duration-300 ease-out `

  return (
    <div
      className={
        ctn === "登入" ? switchClass + "btn-primary" : switchClass + "btn-ghost"
      }
    >
      {ctn.length > 0 && ctn}
    </div>
  )
}
