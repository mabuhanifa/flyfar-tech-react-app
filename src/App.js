import Main from "./components/Main";
import useProvider from "./context/hooks";

function App() {
  const state  = useProvider();
  console.log(state);
  return (
    <div className="bg-[#fcfcfb] mx-60 my-16 rounded-lg">
      <Main />
    </div>
  );
}

export default App;
