import ProfileCard from "./ProfileCard.jsx";
function App() {
  const skils = ["Counting","Predictions","Experiments"];
  return (
    <div>
      <ProfileCard>
        <img
          src="./Herta.jpeg"
          alt=""
          width={"500px"}
          height={"700px"}
          style={{ marginLeft: "220px" }}  
        />
        <h2 style={{ textAlign: "center" }}>Herta</h2>
        <p>
          "I keep things only because I like them. And I like anything that's
          interesting what represents the boundaries of mortal knowledge."
        </p>
        <ul>
          <p>skills</p>
          {skils.map((item, index) => {
           return <li key={index}>{item}</li>;
          })}
        </ul>
      </ProfileCard>
    </div>
  );
}
export default App;
