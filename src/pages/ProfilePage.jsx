<<<<<<< HEAD
import React from 'react'
import Profile from '../components/Profile'
import BottomNavigation from '../components/BottomNavigation'

function ProfilePage() {
  return (
    <div>
      <Profile/>
      <BottomNavigation/>
    </div>
  )
}

=======
import React from 'react'
import Profile from '../components/Profile'
import BottomNavigation from '../components/BottomNavigation'

function ProfilePage() {
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <Profile/>
      </div>
      <BottomNavigation/>
    </div>
  )
}

>>>>>>> other/main
export default ProfilePage