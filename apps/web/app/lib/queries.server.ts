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

export const getOssProjectsQuery = groq`
  *[_type == "oss"] | order(_createdAt asc) {
    _id,
    name,
    description,
    url,
    metric,
  }
`;

export const getBlogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    "createdAt": _createdAt,
    _id,
    title,
    'slug': slug.current,
    content[]
  }
`;
