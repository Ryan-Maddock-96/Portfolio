import { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { ProjectListContainer } from './Styles/Project.style';
import { useEffect } from 'react';
import Project from './Project';

const PROJECT_ID = process.env.REACT_APP_SANITY_PROJECT_ID;
const DATASET = process.env.REACT_APP_SANITY_DATASET;
const QUERY = encodeURIComponent('*[_type == "project"]');

const getFormattedDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  return `${day <= 9 ? `0${day}` : day}-${month <= 9 ? `0${month}` : month}-${year}`;
};

const convertToDate = (date) => {
  console.log('date', date);
  const [day, month, year] = date.split('-');
  return new Date(`${year}-${month}-${day}`);
};

const builder = imageUrlBuilder({
  projectId: [PROJECT_ID], // Your Sanity project ID
  dataset: DATASET // Your Sanity dataset name
});

// eslint-disable-next-line react/prop-types
function ProjectList({ isMobile }) {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      console.log(PROJECT_ID);
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
        const sortedResults = result.sort((a, b) => convertToDate(b.date) - convertToDate(a.date));
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
