import { useState, useEffect } from 'react';
import Project from './Project';
import { ProjectListContainer } from './Styles/Project.style';
import { Section } from './Styles/Global.style';
import { SectionTitle } from './Styles/Text';

let PROJECT_ID = '0coyf8rj';
let DATASET = 'production';
let QUERY = encodeURIComponent('*[_type == "project"]');

const getFormattedDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  return `${day <= 9 ? `0${day}` : day}-${month <= 9 ? `0${month}` : month}-${year}`;
};

// eslint-disable-next-line react/prop-types
function Projects({ isMobile }) {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(
          `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
        );
        let { result } = await response.json();
        if (result.length < 3) {
          while (result.length < 3) {
            result.push({ name: 'placeholder' });
          }
        }
        setProjectsList(result);
        console.log(result);
      } catch (error) {
        console.error('Error retrieving projects:', error);
      }
    };

    getProjects();
  }, []);

  return (
    <Section gap="20px">
      <ProjectListContainer isMobile={isMobile}>
        <SectionTitle margin="0 0 65px" textAlign="center">
          Latest Projects
        </SectionTitle>
        {projectsList.map((proj, index) =>
          proj.name === 'placeholder' ? (
            <Project key={index} name={proj.name} />
          ) : (
            <Project
              key={proj._id}
              name={proj.name}
              description={proj.description}
              github={proj.github}
              skills={proj.skills}
              date={getFormattedDate(proj.date || proj._createdAt)}
            />
          )
        )}
      </ProjectListContainer>
    </Section>
  );
}

export default Projects;
