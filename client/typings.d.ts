type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  _ref: string;
}

interface Reference {
  _type: "reference";
  asset: Reference;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface Portfolio extends Base {
  title: string;
  description: string;
  mainImage: Image;
  skill: Skill[];
  projectType: ProjectType;
  tools: Tool[];
  github?: string;
  blog?: string;
  pageLink?: string;
}

interface Skill extends Base {
  title: string;
  icon: string;
  display: boolean;
}

interface ProjectType extends Base {
  title: string;
}

interface Tool extends Base {
  title: string;
}
