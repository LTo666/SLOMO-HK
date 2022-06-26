import React from "react"

export default function TourCard({btn, des, title}) {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{des}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">{btn}</button>
        </div>
      </div>
    </div>
  )
}
