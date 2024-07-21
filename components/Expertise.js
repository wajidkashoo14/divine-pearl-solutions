import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>Divine pearls solution specializes in digital marketing, web design, and development. We craft tailored, high-impact solutions to boost online presence, drive engagement, and foster business growth.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' path="services"/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
