import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import {recentSessions} from "@/constants";


const Page = () => {
  return (
    <main >
      <h1 className='text-2xl underline'>
          Welcome to my saas app
      </h1>
      <section className='home-section'>
          <CompanionCard 
          id='123'
          name='Neural Network of the Brain'
          topic='Neura the Brainy Explorer'
          subject='science'
          duration={45}
          color='#ffda6e'
          />
          <CompanionCard 
          id='321'
          name='lets count number'
          topic='Count Number'
          subject='maths'
          duration={45}
          color='#efd0ff'
          />
          <CompanionCard 
          id='456'
          name='lets count number'
          topic='Count Number'
          subject='english'
          duration={45}
          color='#FADADD'
          />
         
      </section>
      <section className='home-section'>
          <CompanionList 
             title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
          />

          <Cta />
      </section>
    </main>
  )
}

export default Page