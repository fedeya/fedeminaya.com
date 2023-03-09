import groq from 'groq';

export const getSkillCategories = groq`
 *[_type == "skillCategory"] | order(_createdAt asc) {
  _id,
  name,
  skills[]-> {
    _id,
    name,
    includes
  }
}
`;

export const getExperiences = groq`
  *[_type == "experience"] | order(start desc) {
    _id,
    name,
    pageUrl,
    logo,
    description,
    start,
    end,
    skills[]-> {
      _id,
      name,
    }
  }
`;
