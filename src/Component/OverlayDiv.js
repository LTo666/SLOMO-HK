export default function OverlayDiv({ opacity }) {
  return (
    <div
      style={{
        position: "absolute",
        opacity: "1",
        width: "100%",
        height: "100%",
        background: `rgba(0,0,0,${opacity})`
      }}
    >{""}</div>
  )
}
