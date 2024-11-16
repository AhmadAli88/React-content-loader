import ContentLoader from 'react-content-loader';

const SpeedLoader = () => (
  <ContentLoader speed={2} viewBox="0 0 400 130" height={130} width={400}>
    <rect x="0" y="0" rx="5" ry="5" width="300" height="20" />
    <rect x="0" y="30" rx="5" ry="5" width="250" height="20" />
    <rect x="0" y="60" rx="5" ry="5" width="200" height="20" />
  </ContentLoader>
);

export default SpeedLoader;
