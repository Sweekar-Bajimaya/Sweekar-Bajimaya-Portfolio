export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  credentialURL: string;
}