import './App.css';
import BoxComponent from './components/Box';
import Buttons from './components/Buttons';
import Checkboxes from './components/CheckBox';
import SimpleContainer from './components/Container';
import BasicGrid from './components/Grids';
import MenuComponent from './components/Menu';
import RadioButtons from './components/Radio';
import RangeSlider from './components/RangeSlider';
import BasicSelect from './components/Select';
import ContinuousSlider from './components/Slider';
import BasicSwitches from './components/Switches';
import BasicTabs from './components/Tabs';
import BasicTextFields from './components/TextFields';

function App() {
  return (
    <div className="App">
      <Buttons />
      <Checkboxes />
      <RadioButtons />
      <ContinuousSlider />
      <RangeSlider />
      <BasicSelect />
      <BasicTextFields />
      <BasicSwitches />
      <BoxComponent />
      <SimpleContainer />
      <BasicGrid />
      <BasicTabs />
      <MenuComponent/>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
