import Abc from "./Components/Abc";
import Button from "./Components/Button";
import CustomHook from "./Components/CustomHook";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Learning cutsom hooks and useContext</h2>
      <Button label="button" />
      <CustomHook />
      <Abc />
    </div>
  );
}
