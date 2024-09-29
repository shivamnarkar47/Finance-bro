"use client"
import React, { useEffect, useState } from 'react'
import SidebarElement from './SidebarElement'
import Feed from './Feed';
import Communities from './Communities';
import { sleep } from '@/utils/TransitionLink';
import Loading from './Loading';

interface UserProps {
  user: any
  children: React.ReactNode
}

const Dashboard = ({ user,children }: UserProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const body = document.querySelector("body");
      body?.classList.add("page-transition");
      await sleep(500);
      body?.classList.remove("page-transition");
      setLoading(false)
    })();
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-evenly items-center gap-3 max-h-[90vh] '>
      <SidebarElement data={user} />
      {children}
    </div>

  )
}

export default Dashboard
