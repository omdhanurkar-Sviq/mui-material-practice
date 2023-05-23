import './App.css';
import Buttons from './components/Buttons';
import Checkboxes from './components/CheckBox';
import RadioButtons from './components/Radio';
import RangeSlider from './components/RangeSlider';
import BasicSelect from './components/Select';
import ContinuousSlider from './components/Slider';
import BasicSwitches from './components/Switches';
import BasicTextFields from './components/TextFields';

function App() {
  return (
    <div className="App">
      <Buttons />
      <Checkboxes />
      <RadioButtons />
      <ContinuousSlider />
      <RangeSlider/>
      <BasicSelect/>
      <BasicTextFields/>
      <BasicSwitches/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
