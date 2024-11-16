import './App.css';
import BasicLoader from './components/Basic Loader';
import CustomLoader from './components/Custom SVG Loader';
import DynamicLoader from './components/Dynamic Content Loader';
import ImageTextLoader from './components/Image and Text Loader';
import ListLoader from './components/List Loader';
import ResponsiveLoader from './components/Responsive Loader';
import SpeedLoader from './components/Speed Control';

function App() {
  return (
    <div>
      <BasicLoader />
      <ImageTextLoader/>
      <ResponsiveLoader/>
      <CustomLoader/>
      <div>
      <ListLoader/>
      </div>
      <SpeedLoader/>
      <DynamicLoader/>
    </div>
  );
}

export default App;
