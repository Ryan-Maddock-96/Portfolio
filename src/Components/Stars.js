import { Planet, Star, StarContainer, StarV2, StarV3 } from './Styles/Stars.style';

// eslint-disable-next-line react/prop-types
function Stars({ isMobile }) {
  const starCount = isMobile ? 15 : 50;
  const planetCount = isMobile ? 2 : 7;
  const starV3Count = isMobile ? 8 : 15;
  return (
    <StarContainer>
      {[...Array(starV3Count)].map(() => (
        <>
          <StarV3 leftPos={`${Math.random() * 100}%`} topPos={`${Math.random() * 100}%`} />
        </>
      ))}
      {[...Array(planetCount)].map(() => (
        <>
          <Planet leftPos={`${Math.random() * 100}%`} topPos={`${Math.random() * 100}%`} />
        </>
      ))}
      {[...Array(starCount)].map(() => (
        <>
          <Star leftPos={`${Math.random() * 100}%`} topPos={`${Math.random() * 100}%`} />
          <StarV2 leftPos={`${Math.random() * 100}%`} topPos={`${Math.random() * 100}%`} />
        </>
      ))}
    </StarContainer>
  );
}

export default Stars;
