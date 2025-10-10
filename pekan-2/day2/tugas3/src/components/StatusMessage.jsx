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
          default:
      tumbal = <p>Status tidak diketahui.</p>;
  }

  return(
    <div>
        <p>{tumbal}</p>
    </div>
  )
}
