import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import z from "zod";

const Signup = () => {
  const auth = getAuth();

  const schema = z.object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Valid email address দাও"),

    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password কমপক্ষে ৬ অক্ষরের হতে হবে"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
        const userCreandtial = await createUserWithEmailAndPassword(auth, data.email, data.password)
        
        console.log(userCreandtial.user);
        
    } catch (error) {
       console.log(error);
       
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="email" className="border" {...register("email")} />
          {errors.email && (
            <p className="text-rose-500">{errors.email.message}</p>
          )}
          <input type="password" className="border" {...register("password")} />
          {errors.password && (
            <p className="text-rose-500">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="border px-3 text-green-500 font-bold text-lg/[40px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
