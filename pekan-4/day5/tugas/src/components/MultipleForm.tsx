import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface FormData {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  company: string;
  phone: number;
  securityQuestion: string;
  securityAnswer: string;
  profilePicture: FileList; // untuk upload file
}

const steps = [
  { id: 1, title: "Username" },
  { id: 2, title: "Email Info" },
  { id: 3, title: "Other Info" },
  { id: 4, title: "Security & Upload" },
];

export default function MultipleForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm<FormData>({ mode: "onChange" }); // 🔹 mode real-time validation
  const [currentStep, setCurrentStep] = useState(1);
  const [preview, setPreview] = useState<string | null>(null); // 🔹 untuk preview file upload

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isStepValid = await trigger(fields as any);
    if (isStepValid) setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return ["firstname", "middlename", "lastname"];
      case 2:
        return ["email", "password"];
      case 3:
        return ["company", "phone"];
      case 4:
        return ["securityQuestion", "securityAnswer", "profilePicture"];
      default:
        return [];
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Final submission:", data);
    alert("Registrasi berhasil!! 🎉");
  };

  // 🔹 Watch file changes for preview
  const watchFile = watch("profilePicture");
  if (watchFile && watchFile.length > 0 && !preview) {
    const file = watchFile[0];
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-8 space-y-6 transition-all duration-500">
        {/* Progress Header */}
        <div>
          <h2 className="text-2xl font-semibold text-center text-red-600">
            Multi-Step Form
          </h2>
          <div className="mt-4">
            <Progress value={progress} className="w-full h-2 bg-red-100" />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              {steps.map((s, index) => (
                <span
                  key={s.id}
                  className={`transition-colors ${
                    index + 1 === currentStep ? "text-red-600 font-medium" : ""
                  }`}
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 gap-4">
              <Input
                {...register("firstname", {
                  required: "Nama depan tidak boleh kosong!",
                })}
                placeholder="First Name"
              />
              {errors.firstname && (
                <p className="text-sm text-red-500">{errors.firstname.message}</p>
              )}

              <Input {...register("middlename")} placeholder="Middle Name (optional)" />

              <Input
                {...register("lastname", {
                  required: "Nama belakang tidak boleh kosong!",
                })}
                placeholder="Last Name"
              />
              {errors.lastname && (
                <p className="text-sm text-red-500">{errors.lastname.message}</p>
              )}
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 gap-4">
              <Input
                {...register("email", {
                  required: "Email tidak boleh kosong",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Format email tidak valid!",
                  },
                })}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              <Input
                type="password"
                {...register("password", {
                  required: "Password tidak boleh kosong",
                  minLength: { value: 6, message: "Password minimal 6 karakter!" },
                })}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="grid grid-cols-1 gap-4">
              <Input {...register("company")} placeholder="Company (optional)" />
              <Input {...register("phone")} placeholder="Phone (optional)" />
            </div>
          )}

          {/* STEP 4 — Security + File Upload */}
          {currentStep === 4 && (
            <div className="grid grid-cols-1 gap-4">
              <Input
                {...register("securityQuestion", {
                  required: "Pertanyaan keamanan wajib diisi!",
                })}
                placeholder="Pertanyaan keamanan"
              />
              {errors.securityQuestion && (
                <p className="text-sm text-red-500">{errors.securityQuestion.message}</p>
              )}

              <Input
                {...register("securityAnswer", {
                  required: "Jawaban keamanan wajib diisi!",
                })}
                placeholder="Jawaban keamanan"
              />
              {errors.securityAnswer && (
                <p className="text-sm text-red-500">{errors.securityAnswer.message}</p>
              )}

              {/* 🔹 File Upload + Preview */}
              <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Profile Picture
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  {...register("profilePicture", {
                    required: "Wajib upload foto profil!",
                  })}
                />
                {errors.profilePicture && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.profilePicture.message}
                  </p>
                )}

                {preview && (
                  <div className="mt-3 flex justify-center">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-full border-2 border-red-500"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              disabled={currentStep === 1}
              onClick={prevStep}
              className={`transition-all ${
                currentStep === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Prev
            </Button>

            {currentStep < steps.length ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!isValid} // 🔹 real-time validation aktif
                className={`${
                  isValid
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
