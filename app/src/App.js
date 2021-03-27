import { useDispatch, useSelector } from "react-redux";

import { startAllPokemons } from "./components/redux/actions";

function App() {
  const dispatch = useDispatch();
  const numberBasic = useSelector((state) => state.numberBasic);
  return (
    <>
      <button
        onClick={() => {
          dispatch(startAllPokemons());
        }}
      >
        Click me please
      </button>
      <h2>{numberBasic}</h2>
    </>
  );
}

export default App;
