import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';

export const dynamic = "force-dynamic"; // <-- Add this

const Page = async () => {

  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);


  return (
    <main >
      <h1 className='text-2xl underline'>
        ✨Smarter than your group chat, chiller than your teacher. Learn with voice✨.
      </h1>
      <section className='home-section'>

        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}

      </section>
      <section className='home-section'>
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />

        <Cta />
      </section>
    </main>
  )
}

export default Page