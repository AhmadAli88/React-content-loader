import { useState } from 'react';
import ContentLoader from 'react-content-loader';

const DynamicLoader = () => {
  const [width, setWidth] = useState(400);

  return (
    <div>
      <ContentLoader viewBox={`0 0 ${width} 100`} height={100} width={width}>
        <rect x="0" y="10" rx="5" ry="5" width="100%" height="20" />
        <rect x="0" y="40" rx="5" ry="5" width="80%" height="20" />
      </ContentLoader>
      <button onClick={() => setWidth(600)}>Increase Width</button>
    </div>
  );
};

export default DynamicLoader;
