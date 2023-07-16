import { Planet, Star, StarContainer, StarV2, StarV3 } from './Styles/Stars.style';

// eslint-disable-next-line react/prop-types
function Stars({ isMobile }) {
  const starCount = isMobile ? 15 : 50;
  const planetCount = isMobile ? 2 : 7;
  const starV3Count = isMobile ? 8 : 15;
  return (
    <StarContainer>
      {[...Array(starV3Count)].map((star, index) => (
        <StarV3
          key={`starV3-${index}`}
          leftPos={`${Math.random() * 100}%`}
          topPos={`${Math.random() * 100}%`}
        />
      ))}
      {[...Array(planetCount)].map((planet, index) => (
        <Planet
          key={`planet-${index}`}
          leftPos={`${Math.random() * 100}%`}
          topPos={`${Math.random() * 100}%`}
        />
      ))}
      {[...Array(starCount)].map((star, index) => (
        <>
          <Star
            key={`star-${index}`}
            leftPos={`${Math.random() * 100}%`}
            topPos={`${Math.random() * 100}%`}
          />
          <StarV2
            key={`starV2-${index}`}
            leftPos={`${Math.random() * 100}%`}
            topPos={`${Math.random() * 100}%`}
          />
        </>
      ))}
    </StarContainer>
  );
}

export default Stars;
