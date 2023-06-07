import { ReactComponent as Github } from '../images/square-github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

// eslint-disable-next-line react/prop-types
function HeaderComponent({ className }) {
  return (
    <div className={className}>
      <div>
        <h2>Hi there! I&apos;m</h2>
        <h1>Ryan Maddock</h1>
        <p>
          A passioniate <b>Front End Developer</b> <br /> based in <b>Southport</b>
        </p>
        <div className="socials">
          Connect With me: <Github /> Github <Linkedin /> Linkedin
        </div>
      </div>
    </div>
  );
}
export default HeaderComponent;
