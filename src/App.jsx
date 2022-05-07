import { Form } from "./Components/Form";
import { Mode } from "./Components/Mode";


function App() {
  return (
    <div className="flex  justify-center  h-screen w-full mt-2.5   ">
        <Mode />
      <div className="">
        <Form />
      </div>
    </div>
  );
}

export default App;
