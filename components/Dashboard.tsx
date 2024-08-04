import React from 'react'

interface UserProps{
    user:any
}

const Dashboard = ({user}:UserProps) => {
    
  return (
    <div>
        {user.email}
    </div>
  )
}

export default Dashboard
