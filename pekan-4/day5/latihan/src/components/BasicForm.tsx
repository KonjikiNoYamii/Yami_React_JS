import { useForm } from "react-hook-form"
import { promise } from "zod"

interface FormData {
    firstName :string
    lastName:string
    email:string
}

export default function BasicForm() {
    const {register, handleSubmit, formState:{isSubmitting, errors}} = useForm<FormData>()

    const onSubmit = async(data:FormData) =>{ // mengambil cetakan FormData untuk diisi tipe datanya ke data
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log(data);        
    }

    
    return(
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('firstName',{required:"firstname is required"})} /> <br /> {/* data seperti firstname harus dalam bentuk string */}
                {errors.firstName &&(
                    <p style={{color:"red"}}>{errors.firstName.message}</p>
                )}
                <input type="text"{...register('lastName',{required:"lastname is required"})} /> <br />
                {errors.lastName &&(
                    <p style={{color:"red"}}>{errors.lastName.message}</p>
                )}
                <input type="email" {...register('email',{required:"email is required", pattern:{value:/^\S+@\S+$/, message:"invalid enail addres"}})}/> <br />
                {errors.email &&(
                    <p style={{color:"red"}}>{errors.email.message}</p>
                )}
                <button type="submit" disabled={isSubmitting}>{isSubmitting?"submitting...":"submit"}</button> <br />
            </form>
        </div>
    )
}