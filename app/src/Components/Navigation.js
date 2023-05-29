import { NavLink } from './Styles/Navigation.style';
import { Button } from './Styles/Button.style';
import { ReactComponent as Logo } from '../images/logo.svg';

// eslint-disable-next-line react/prop-types
function Navigation({ className }) {
  return (
    <nav className={className}>
      <Logo />
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '50px'
        }}>
        <NavLink>Work</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </div>
      <Button>Download CV</Button>
    </nav>
  );
}

export default Navigation;
