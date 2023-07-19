import { Flex } from './Styles/Global.style';
import {
  HTMLIcon,
  CSSIcon,
  LESSIcon,
  SASSIcon,
  JavaScriptIcon,
  JQueryIcon,
  TypeScriptIcon,
  ReactIcon,
  GitIcon,
  GulpIcon,
  NodeIcon,
  ExpressIcon,
  SalesforceIcon,
  SanityIcon,
  FigmaIcon,
  PhotoshopIcon,
  AmplienceIcon
} from './Styles/Icons';
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
    case 'less':
      icon = <LESSIcon />;
      background = '#1D365D';
      break;
    case 'sass':
      icon = <SASSIcon />;
      background = '#CF649A';
      break;
    case 'javascript':
      icon = <JavaScriptIcon />;
      background = '#30312E';
      break;
    case 'jquery':
      icon = <JQueryIcon />;
      background = '#21ACE2';
      break;
    case 'typescript':
      icon = <TypeScriptIcon />;
      background = '#2D79C7';
      break;
    case 'react':
      icon = <ReactIcon />;
      background = '#149ECA';
      break;
    case 'styled components':
      icon = <ReactIcon />;
      background = '#149ECA';
      break;
    case 'git':
      icon = <GitIcon />;
      background = '#FB4F28';
      break;
    case 'gulp':
      icon = <GulpIcon />;
      background = '#CF4647';
      break;
    case 'node':
      icon = <NodeIcon />;
      background = '#57A645';
      break;
    case 'express':
      icon = <ExpressIcon />;
      background = '#6A6A6A';
      break;
    case 'amplience':
      icon = <AmplienceIcon />;
      background = '#29333F';
      break;
    case 'salesforce':
      icon = <SalesforceIcon />;
      background = '#009DDC';
      break;
    case 'sanity':
      icon = <SanityIcon />;
      background = '#F36456';
      break;
    case 'figma':
      icon = <FigmaIcon />;
      background = '#A259FF';
      break;
    case 'photoshop':
      icon = <PhotoshopIcon />;
      background = '#001833';
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
