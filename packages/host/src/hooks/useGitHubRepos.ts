import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { IGitHubRepos } from '@host/types/core-portfolio-types';
import { NotifyError } from '@host/components/notify/notify';
import { PortfolioRoutes } from '@host/constants/portfolio-api-routes';

const useGitHubRepos = () => {
  const [gitHubRepos, setGitHubRepos] = useState<IGitHubRepos[]>([]);

  const getAllGitHubRepos = useCallback(async () => {
    try {
      const { data } = await axios.get(PortfolioRoutes.GITHUB_PROJECTS);

      if (data.statusCode === 200) {
        const newRepos: IGitHubRepos[] = [];
        data?.data.map((repos: IGitHubRepos) => {
          const newData = {
            id: repos.id,
            name: repos.name,
            homepage: repos.homepage ?? '',
            githubUrl: repos.html_url ?? repos.svn_url ?? repos.clone_url ?? '',
            language: repos.language,
            created_at: repos.created_at,
            updated_at: repos.updated_at,
            description: repos.description,
          };
          return newRepos.push(newData);
        });
        setGitHubRepos(newRepos);
      } else {
        NotifyError('Repo not found!');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      NotifyError(error?.message?.slice(0, 30) || 'Request not completed');
    }
  }, []);

  useEffect(() => {
    getAllGitHubRepos();
  }, [getAllGitHubRepos]);

  return { gitHubRepos };
};

export default useGitHubRepos;
