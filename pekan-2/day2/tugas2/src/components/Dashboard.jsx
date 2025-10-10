export default function Dashboard({ isAkhirat, notification }) {
  let teks = "";

  const pilihan = isAkhirat ? "masuk surga":"masuk neraka"

  function share() {
    alert("masuk surga 2x");
  }
  return (
    <div>
      <h2>{pilihan}</h2>
      <p onClick={share} style={{border:"black solid 2px", width:"70px"}}>Share</p>
      {isAkhirat && notification.length > 0 && (
        <p>anda punya notif {notification.length}</p>
      )}
    </div>
  );
}
