import React from 'react'
import Icons from '../components/Icons'
import { FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi'

const OurTeamCart = ({ name, image, talent }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt="profile"
        className="w-[15rem] rounded-full border-[8px] border-gray-400"
      />
      <div className="flex flex-col items-center">
        <p className="font-semibold text-2xl">{name}</p>
        <p className="hover:underline">
          {talent ? (
            talent
          ) : (
            <a
              href="https://www.google.com"
              alt="link"
              target={'_blank'}
              rel="noreferrer"
            >
              Front-end Developer
            </a>
          )}
        </p>
        <div className="mt-2 flex gap-3">
          <Icons icon={<FiTwitter />} />
          <Icons icon={<FiFacebook />} />
          <Icons icon={<FiLinkedin />} />
        </div>
      </div>
    </div>
  )
}

export default OurTeamCart
