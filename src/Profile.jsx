import React from 'react'

function Profile({ profileDetails, login, logout }) {
  console.log(profileDetails)
  return (
    <>
      {/* <h1>React Google Login</h1> */}
      <div className='profile-container'>
        {
          profileDetails.length != 0 ? (
            <div className="profile-details">
              <img src={profileDetails.picture} alt="" className='profile-avathar' />
              <div className="profile-content">
                <h3>{profileDetails.name}</h3>
                <h5>{profileDetails.email}</h5>
              </div>
              <button className='profile-button' onClick={logout}>Logout</button>
            </div>
          ) :
            (
              <>
                <div className="landing-container">
                  <div className="landing-icon">
                    <h1>🎉</h1>
                  </div>
                  <h4>Sign in to create profile!</h4>
                  <button onClick={login}>⚡ Sign in with google</button>
                </div>
              </>
            )
        }
      </div>
    </>
  )
}

export default Profile