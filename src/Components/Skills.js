import { Flex } from './Styles/Global.style';
import { HTMLIcon, CSSIcon } from './Styles/Icons';
import { Text } from './Styles/Text';
// eslint-disable-next-line react/prop-types
function Skills({ skill }) {
  let icon;
  let background = '#000';
  // eslint-disable-next-line react/prop-types
  switch (skill.toLowerCase()) {
    case 'html':
      icon = <HTMLIcon />;
      background = '#E34C26';
      break;
    case 'css':
      icon = <CSSIcon />;
      background = '#264DE4';
      break;
  }
  return (
    <Flex background={background} padding="5px 10px" borderRadius="5px" alignItems="center">
      {icon}
      <Text weight="bold" color="#fff" lineHeight="normal">
        {skill}
      </Text>
    </Flex>
  );
}

export default Skills;
