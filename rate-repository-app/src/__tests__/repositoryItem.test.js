import { render,  screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
  
      render(<RepositoryListContainer repositories = {repositories }/>);
     
      expect(screen.getByText('jaredpalmer/formik')).toBeDefined();
    
      const fullNameElements = screen.queryAllByTestId('fullName');
      expect(fullNameElements[0]).toHaveTextContent('jaredpalmer/formik');
      expect(fullNameElements[1]).toHaveTextContent('async-library/react-async');

      const descriptionElements = screen.queryAllByTestId('description');
      expect(descriptionElements[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(descriptionElements[1]).toHaveTextContent('Flexible promise-based React data loader');
      
      const languageElements = screen.queryAllByTestId('language');
      expect(languageElements[0]).toHaveTextContent('TypeScript');
      expect(languageElements[1]).toHaveTextContent('JavaScript');

      const forksCountElements = screen.queryAllByTestId('forksCount');
      expect(forksCountElements[0]).toHaveTextContent('1.6k');
      expect(forksCountElements[1]).toHaveTextContent('69');

      const stargazersCountElements = screen.queryAllByTestId('stargazersCount');
      expect(stargazersCountElements[0]).toHaveTextContent('21.9k');
      expect(stargazersCountElements[1]).toHaveTextContent('1.8k');

      const ratingAverageElements = screen.queryAllByTestId('ratingAverage');
      expect(ratingAverageElements[0]).toHaveTextContent('88');
      expect(ratingAverageElements[1]).toHaveTextContent('72');

    });
    
  });
});