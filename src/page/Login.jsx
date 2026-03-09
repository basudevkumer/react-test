import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
// ১. এখানে signInWithEmailAndPassword ইমপোর্ট করতে হবে

import z, { email } from "zod";

const Login = () => {
  const auth = getAuth();

  // ভ্যালিডেশন স্কিমা (আগের মতোই রাখতে পারেন)
  const schema = z.object({
    email: z.string().nonempty("ইমেল প্রয়োজন").email("সঠিক ইমেল ঠিকানা দিন"),
    password: z
      .string()
      .nonempty("পাসওয়ার্ড প্রয়োজন")
      .min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
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
      const userCreandtial = await signInWithEmailAndPassword(auth,data.email,data.password)
      console.log(userCreandtial.user);
      alert("Login Success!")
      
      
    } catch (error) {
      console.log(error);
      
    }





    // try {
    //   // ২. এখানে সাইন-ইন মেথড কল করা হয়েছে
    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     data.email,
    //     data.password,
    //   );

    //   console.log("সফলভাবে লগইন হয়েছে:", userCredential.user);
    //   alert("Login Successful!");
    // } catch (error) {
    //   // ৩. এরর হ্যান্ডেলিং (যেমন: ভুল পাসওয়ার্ড বা ইউজার না পাওয়া গেলে)
    //   console.log(error.code);
    // }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 max-w-sm">
          {/* ইমেল ইনপুট */}
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-rose-500 text-sm">{errors.email.message}</p>
          )}

          {/* পাসওয়ার্ড ইনপুট */}
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-rose-500 text-sm">{errors.password.message}</p>
          )}

          {/* সাবমিট বাটন */}
          <button
            type="submit"
            className="border px-3 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
