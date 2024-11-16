import ContentLoader from 'react-content-loader';

const ImageTextLoader = () => (
  <ContentLoader viewBox="0 0 400 150" height={150} width={400}>
    <circle cx="75" cy="75" r="50" />
    <rect x="140" y="15" rx="4" ry="4" width="200" height="15" />
    <rect x="140" y="35" rx="4" ry="4" width="150" height="10" />
    <rect x="140" y="55" rx="4" ry="4" width="100" height="10" />
  </ContentLoader>
);

export default ImageTextLoader;
