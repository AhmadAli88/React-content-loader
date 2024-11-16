import ContentLoader from 'react-content-loader';

const ResponsiveLoader = () => (
  <ContentLoader viewBox="0 0 100% 100" height={100} width="100%">
    <rect x="0" y="10" rx="5" ry="5" width="80%" height="20" />
    <rect x="0" y="40" rx="5" ry="5" width="90%" height="20" />
    <rect x="0" y="70" rx="5" ry="5" width="70%" height="20" />
  </ContentLoader>
);

export default ResponsiveLoader;
