import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>

      <h1>Popular Companion</h1>

      <section className='home-section'>
        <CompanionCard 
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />

        <CompanionCard 
          id="2"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Maths"
          duration={45}
          color="#e5d0ff"
        />

        <CompanionCard 
          id="3"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Enginiering"
          duration={45}
          color="#bde7ff"
        />
      </section>

      <section className='home-section'>
        <CompanionList/>
        <Cta />
      </section>

    </main>
  )
}

export default Page