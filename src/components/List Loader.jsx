import ContentLoader from 'react-content-loader';

const ListLoader = () => (
  <ContentLoader viewBox="0 0 400 160" height={160} width={400}>
    <rect x="0" y="10" rx="5" ry="5" width="350" height="15" />
    <rect x="0" y="40" rx="5" ry="5" width="300" height="15" />
    <rect x="0" y="70" rx="5" ry="5" width="350" height="15" />
    <rect x="0" y="100" rx="5" ry="5" width="250" height="15" />
    <rect x="0" y="130" rx="5" ry="5" width="300" height="15" />
  </ContentLoader>
);

export default ListLoader;
