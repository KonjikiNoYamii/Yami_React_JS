import { useForm } from "../hook/useForm";

export default function FormInput() {
  const { values, handleChange, resetChange } = useForm({
    name: "",
    email: "",
  });

  return (
    <div>
      <form action="">
        <p>input nama</p>
        <input type="text" value={values.name} name="name" onChange={handleChange} />

        <p>input email</p>
        <input type="email" value={values.email} name="email" onChange={handleChange} />

        <button onClick={resetChange}>reset form</button>
      </form>

      <p>{values.name}</p>
      <p>{values.email}</p>
    </div>
  );
}
