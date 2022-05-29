import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { DiGithubBadge } from 'react-icons/di'
import { FiInstagram } from 'react-icons/fi'


const headerSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.facebook.com/profile.php?id=100051076660680" target='_blank' rel="noreferrer"><BsFacebook /></a>
      <a href="https://github.com/amarsanaa1234" target='_blank' rel="noreferrer" ><DiGithubBadge /></a>
      <a href="https://www.instagram.com/amaraa_0130/" target='_blank' rel="noreferrer" ><FiInstagram /></a>
    </div>
  )
}

export default headerSocials