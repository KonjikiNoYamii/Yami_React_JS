export default function StatusMessage({ status }) {
  let tumbal = "";

  switch (status) {
    case "loading":
      tumbal = "sedang memuat";
      break;
    case "error":
      tumbal = "ada kesalahan";
      break;
    case "succes":
      tumbal = "berhasil";
      break;
  }

  return(
    <div>
        <p>{tumbal}</p>
    </div>
  )
}
