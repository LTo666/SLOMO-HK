

export default function Banner({src, height}) {
  return (
    <div >
      <img src={src} alt="" style={{width: "100%", height: `${height}`, overflow: "hidden", objectFit: "cover"}}/>
    </div>
  )
}
