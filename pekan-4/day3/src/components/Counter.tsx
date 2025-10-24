import { useDispatch, useSelector } from "react-redux";
import {kurang,tambah,tambahDenganNilai} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>tumbal: {count}</h3>
      <button onClick={() => dispatch(tambah())}>tambah</button>
      <button onClick={() => dispatch(kurang())}>kurang</button>
      <button onClick={() => dispatch(tambahDenganNilai(7))}>tambah 7</button>
    </div>
  );
}
