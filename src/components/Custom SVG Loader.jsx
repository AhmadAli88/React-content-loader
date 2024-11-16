import ContentLoader from 'react-content-loader';

const CustomLoader = () => (
  <ContentLoader
    viewBox="0 0 400 200"
    height={200}
    width={400}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="400" height="150" />
    <circle cx="30" cy="180" r="20" />
    <rect x="60" y="170" rx="5" ry="5" width="150" height="20" />
  </ContentLoader>
);

export default CustomLoader;
