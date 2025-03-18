export interface IGitHubRepos {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  language: string;
  created_at: string;
  updated_at: string;
  homepage: string;
  svn_url?: string;
  html_url?: string;
  clone_url?: string;
}

export interface IProjectCardItems {
  projects: IGitHubRepos;
}

export interface IMicroServicesCardItems {
  image: string;
  title: string;
  description: string;
  techStack: string;
  features: Array<string>;
}

export interface IMicroServicesCardProps {
  services: IMicroServicesCardItems;
}
