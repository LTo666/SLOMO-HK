import React from 'react'
import TourCard from '../Component/TourCard'

export default function LangingPage() {

  const content = [
    {title: "Yes", des: "Buy now", btn: "Love"},
    {title: "Yes1", des: "Buy now1", btn: "Love1"},
    {title: "Yes2", des: "Buy now2", btn: "Love2"}
  ]


  return (
    <div className=''>
      LangingPage
      <div className='grid grid-cols-2' >
      {content.map((item, id) => {
        return <TourCard btn={item.btn} title={item.title} des={item.des} key={id} ></TourCard>
      })}
      </div>
      
    </div>
  )
}
