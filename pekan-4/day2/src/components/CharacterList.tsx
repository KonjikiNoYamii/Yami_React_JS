import { useFetch } from "../hooks/useFetch";

interface Character {
  id: number;
  name: string;
  image: string;
  hobby: string[];
}



type CharacterPreview = Pick<Character, "name" | "image">;
type CharacterInfo = Omit<Character, "hobby">;
type PartialCharacter = Partial<Character>;
type CharacterRecord = Record<string, Character>;
export function CharacterList() {
  const { data, loading, error } = useFetch<Character[]>("./Character.json");

  function isCharacterArray(data:any): data is Character[] {
    return(
        Array.isArray(data) && data.every(item => "id" in item && "name" in item && "image" in item)
    )
    
}

if(!data || !isCharacterArray(data)){
    return <p>data tidak valid</p>
}

  if (loading) return <p>sedang memuat...</p>;
  if (error) return <p>terjadi kesalahan!</p>;

  const preview: CharacterPreview = {
    name: "Hoshino",
    image: "https://api.ennead.cc/buruaka/image/icon/hoshino",
  };

  const info: CharacterInfo = {
    name:"Yami",
    image:"https://i.pinimg.com/736x/63/e1/7c/63e17c8be3bc86818c2f0d6d298f9aa6.jpg",
    id:1
  }
  return (
    <div>
        <div>
        <h3>menggunakan utility types</h3>
        <h4>{preview.name}</h4>
        <img src={preview.image} alt="" /><br /><br />
        <h4>{info.name}</h4>        
        <img src={info.image} alt="" />
        </div>

        <h3>mendapat data dari API</h3>
       <div style={{display:"grid", gridTemplateColumns:"300px 300px 300px 300px 300px", gridAutoRows:"300px"}}>
         {data?.map((c) =>(
            <div>
                <img src={c.image} alt=""  style={{width:"250px", height:"250px", borderRadius:"20px"}}/>
                <p>{c.name}</p>
            </div>
         ))}
       </div>

    </div>
  )
}
