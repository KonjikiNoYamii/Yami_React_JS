import { ChangeEvent, createContext, ReactNode, useContext, useState } from "react"

interface FormData {
    name:string
    email:string
    age:number
}

interface FormDataContextType{
    form: FormData
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const FormContext = createContext<FormDataContextType | undefined>(undefined)
export function FormProvider({children}:{children: ReactNode}) {
    const [form, setForm] = useState<FormData>({
        name:"",
        email:"",
        age:0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setForm(prev =>({
            ...prev, [name]:name === "age" ? Number(value) : value
        }))
    }
    return(
        <FormContext.Provider value={{ form, handleChange}}>
            {children}
        </FormContext.Provider>
    )
}
export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext harus digunakan di dalam FormProvider!");
  return context;
}