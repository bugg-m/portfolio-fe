const baseURL = process.env.NX_PUBLIC_PORTFOLIO_API_URL;

export const PortfolioRoutes = {
  SEND_MESSAGE: `${baseURL}/sendMessage`,
  GITHUB_PROJECTS: `${baseURL}/githubProjects`,
  UPLOAD_CV: `${baseURL}/upload-cv`,
  DOWNLOAD_CV: `${baseURL}/download-cv`,
};
