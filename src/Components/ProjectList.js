import { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { ProjectListContainer } from './Styles/Project.style';
import { useEffect } from 'react';
import Project from './Project';
import client from '../sanityClient';

const QUERY = '*[_type == "project"]';

const getFormattedDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  return `${day <= 9 ? `0${day}` : day}-${month <= 9 ? `0${month}` : month}-${year}`;
};

const convertToDate = (date) => {
  const [day, month, year] = date.split('-');
  return new Date(`${year}-${month}-${day}`);
};

const builder = imageUrlBuilder({
  projectId: [process.env.REACT_APP_SANITY_PROJECT_ID],
  dataset: process.env.REACT_APP_SANITY_DATASET
});

// eslint-disable-next-line react/prop-types
function ProjectList({ isMobile }) {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await client.fetch(QUERY);
        if (response.length < 3) {
          while (response.length < 3) {
            response.push({ name: 'placeholder' });
          }
        }
        const sortedResults = response.sort(
          (a, b) => convertToDate(b.date) - convertToDate(a.date)
        );
        setProjectsList(sortedResults);
      } catch (error) {
        console.error('Error retrieving projects:', error);
      }
    };

    getProjects();
  }, []);
  return (
    <ProjectListContainer isMobile={isMobile}>
      {projectsList.map((proj, index) =>
        proj.name === 'placeholder' ? (
          <Project key={index} name={proj.name} />
        ) : (
          <Project
            key={proj._id}
            name={proj.name}
            description={proj.description}
            image={proj.image && builder.image(proj.image)}
            github={proj.github}
            live={proj.liveLink}
            skills={proj.skills}
            date={proj.date || getFormattedDate(proj._createdAt)}
          />
        )
      )}
    </ProjectListContainer>
  );
}

export default ProjectList;
