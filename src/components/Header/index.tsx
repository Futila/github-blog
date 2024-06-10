import { NavLink } from 'react-router-dom'
import { HeaderContainer /* HeaderContent */ } from './styles'
import githubBlogLogo from '../../assets/logo.svg'

// export function Header() {
//   return (
//     <HeaderContainer>
//       <HeaderContent>
//         <NavLink to={'/'}>
//           <img src={githubBlogLogo} alt="" />
//         </NavLink>
//       </HeaderContent>
//     </HeaderContainer>
//   )
// }

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogo} alt="" />
    </HeaderContainer>
  )
}
