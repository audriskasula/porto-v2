import React from 'react'
import { DFlex, DFlexJustifyBetween } from '../../Styled/flex.styled'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '../../Components/Icon/HomeIcon'
import UserSquareIcon from '../../Components/Icon/UserSquareIcon'
import SettingIcon from '../../Components/Icon/SettingIcon'

export default function Header() {
  const navigate = useNavigate()
  return (
    <>
      <DFlexJustifyBetween className='py-5'>
        <h3 className='fw-bold' onClick={() => navigate('')} style={{cursor:'pointer'}}>Dexpress</h3>
        <DFlex className='gap-5'>
          <Menu to={''}>
            <DFlex className='gap-2'>
              <HomeIcon />
              <h6 className='m-0'>Home</h6>
            </DFlex>
          </Menu>
          <Menu to={'/about-me'}>
            <DFlex className='gap-2'>
              <UserSquareIcon />
              <h6 className='m-0'>About Me</h6>
            </DFlex>
          </Menu>
          <Menu to={'/project'}>
            <DFlex className='gap-2'>
              <SettingIcon />
              <h6 className='m-0'>Project</h6>
            </DFlex>
          </Menu>
        </DFlex>
      </DFlexJustifyBetween >
    </>
  )
}

const Menu = styled(NavLink)`
  text-decoration: unset;
  color: black;
  &:hover {
    color: var(--primary);
  }

  &.active {
    color: var(--primary);
  }
`
