export default function Dashboard({ isAkhirat, notification }) {
  let teks = "";

  if (isAkhirat) {
    teks = "Masuk Surga";
  } else {
    teks = "Masuk Neraka";
  }

  function share() {
    alert("masuk surga 2x");
  }
  return (
    <div>
      <h2>{teks}</h2>
      <p onClick={share} style={{border:"black solid 2px", width:"70px"}}>Share</p>
      {isAkhirat && notification.length > 0 && (
        <p>anda punya notif {notification.length}</p>
      )}
    </div>
  );
}
