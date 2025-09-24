import { useState, useEffect } from 'react';
import client from '@/lib/contentful';
import { PortfolioProject, PortfolioQuery, PortfolioProjectSkeleton } from '@/lib/contentful-types';

interface UsePortfolioReturn {
  projects: PortfolioProject[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const usePortfolio = (query: PortfolioQuery = {}): UsePortfolioReturn => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await client.getEntries<PortfolioProjectSkeleton>({
        content_type: 'portfolioProjects', // Make sure this matches your Contentful content type ID
        limit: query.limit || 20,
        skip: query.skip || 0,
        order: query.order || 'sys.createdAt', // Use sys.createdAt instead of non-existent projectDate
        ...query
      });
      
      // Type assertion to ensure proper typing
      setProjects(response.items as PortfolioProject[]);
    } catch (err) {
      console.error('Error fetching portfolio projects:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  });

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects
  };
};
