import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface FormData {
  username: string;
  password: string;
  email: string;
}

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-rows-4 gap-6 w-[500px] bg-white p-8 rounded-2xl shadow-lg"
      >
        <h4>Basic Form</h4>
        <div>
          <Input
            {...register("username", {
              required: "Username tidak boleh kosong",
            })}
            placeholder="Masukkan username"
            className="w-full"
          />
          {errors.username ? (
            <p className="text-red-700 text-sm mt-1">{errors.username.message}</p>
          ) : (
            <p className="text-gray-400 text-sm mt-1">Masukkan username anda</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            {...register("password", {
              required: "Password tidak boleh kosong",
              minLength: {
                value: 6,
                message: "Password tidak boleh kurang dari 6 karakter",
              },
            })}
            placeholder="Masukkan password"
            className="w-full"
          />
          {errors.password ? (
            <p className="text-red-700 text-sm mt-1">{errors.password.message}</p>
          ) : (
            <p className="text-gray-400 text-sm mt-1">Masukkan password anda</p>
          )}
        </div>

        <div>
          <Input
            type="email"
            {...register("email", {
              required: "Email tidak boleh kosong",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Pastikan email terisi dengan benar!",
              },
            })}
            placeholder="Masukkan email"
            className="w-full"
          />
          {errors.email ? (
            <p className="text-red-700 text-sm mt-1">{errors.email.message}</p>
          ) : (
            <p className="text-gray-400 text-sm mt-1">Masukkan email anda</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 text-lg font-semibold"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
