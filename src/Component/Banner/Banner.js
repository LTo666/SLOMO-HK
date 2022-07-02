

export default function Banner({src, height}) {
  return (
    <div style={{border: "2px solid black", width: "100%", height: `${height}`}} >
      This is an banner div
      <img src={src} alt=""/>
    </div>
  )
}
