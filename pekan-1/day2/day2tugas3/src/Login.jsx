function Login() {
  const password = "admin123#";
  const username = "Johny";

  function Submit(e) {
    e.preventDefault();

    const inputUser = document.getElementById("user").value.trim();
    const inputPass = document.getElementById("pass").value.trim();
    const warn = document.getElementById("warn");

    if (inputPass === password && inputUser === username) {
      warn.style.color = "green";
      warn.innerText = "Berhasil";
    } else {
      warn.style.color = "red";
      warn.innerText = "Hengker jangan mencuri";
    }
  }

  return (
    <div>
      <form id="login" onSubmit={Submit} style={{display:"grid",gridTemplateColumns:"1fr", gridAutoRows:"50px", margin:"300px"}}>
        <h2>database kominfo</h2>
        <label>
          Username
          <input type="text" id="user" />
        </label>
        <label>
          Password
          <input type="password" id="pass" />
        </label>
        <button type="submit">Login</button>
        <p id="warn"></p>
      </form>
    </div>
  );
}

export default Login;
