import React from 'react'
import { useAuth } from '../../auth/hooks/useAuth'

const Profile = () => {
  const { user, loading} = useAuth();
  console.log(user)
  return (
    <div>profile</div>
  )
}

export default Profile