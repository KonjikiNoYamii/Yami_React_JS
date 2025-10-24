import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { fetchCharacters } from "../features/character/characterSlice";

export default function Character() {
    const dispatch = useDispatch<AppDispatch>()
    const { list, status, error} = useSelector((state:RootState) => state.character)

    
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Memuat karakter... ✨</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return(
    <div>
        <div>
            {list.map((char) =>(
                <div key={char.id}>
                    <img src={char.image} alt="" />
                    <p>{char.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}