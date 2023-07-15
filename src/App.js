import Main from "./components/Main";
import useProvider from "./context/hooks";

function App() {
  const state  = useProvider();
  console.log(state);
  return (
    <div className="bg-[#fcfcfb] mx-40 my-16">
      <Main />
      drfdfrtrt
    </div>
  );
}

export default App;
