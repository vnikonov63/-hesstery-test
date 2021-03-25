import { useDispatch, useSelector } from "react-redux";

import increment from "./components/redux/actions";

function App() {
  const dispatch = useDispatch();
  const numberBasic = useSelector((state) => state.numberBasic);
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Click me please
      </button>
      <h2>{numberBasic}</h2>
    </>
  );
}

export default App;
