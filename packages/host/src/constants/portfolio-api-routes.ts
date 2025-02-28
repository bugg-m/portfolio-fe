const baseURL = process.env.NX_PUBLIC_PORTFOLIO_API_URL;

export const PortfolioRoutes = {
  GET_SUMMARY: `${baseURL}/summary`,
  GITHUB_PROJECTS: `${baseURL}/githubProjects`,
};
