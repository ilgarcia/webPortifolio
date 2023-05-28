export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'skill',
      title: 'Skill',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}]
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tools'}}]
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'reference',
      to: {type: 'projectType'}
    },
    {
      name: "github",
      title: "Github Link",
      type: "string",
    },
    {
      name: "blog",
      title: "Blog Link",
      type: "string",
    },
    {
      name: "pageLink",
      title: "Page Link",
      type: "string",
    },
  ],
};
