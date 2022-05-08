import { Form } from "./Components/Form";
import { Mode } from "./Components/Mode";


function App() {
  return (
    <div className="flex  justify-center gap-20  h-screen w-full mt-3.5   ">
        <Form />
      <div className="items-end right-0">
        <Mode />
      </div>
    </div>
  );
}

export default App;
