import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <section className="py-32 sm:px-10">
      <form className="flex flex-col gap-10 sm:w-1/2 w:full mx-auto shadow-lg shadow-slate-500 rounded-xl overflow-hidden py-10 px-10">
        <h2 className="text-3xl font-semibold text-center">
          <span className="text-[#3B6FDE] border-b-2 border-b-[#3B6FDE]">
            Login
          </span>
        </h2>

        <input
          type="email"
          required
          className="border border-solid border-[#585555] p-3 rounded-lg text-[#585555]"
          placeholder="Email:"
          name="email"
        />

        <input
          type="text"
          required
          className="border border-solid border-[#585555] p-3 rounded-lg text-[#585555]"
          placeholder="Password:"
          name="password"
        />

        <button
          typpe="submit"
          className="flex blue_background hover:bg-blue-700 text-white font-bold py-2 px-14 mx-auto rounded-2xl"
        >
          Login
        </button>
        <Link
          className="text-[#3B6FDE] text-center font-2xl font-semibold"
          href="/Login"
        >
          Forgot Password?
        </Link>
        <p className="text-center font-2xl font-semibold">
          Don't yet have an account?{" "}
          <Link className="text-[#3B6FDE]" href="/create-account">
            Sign Up.
          </Link>
        </p>
        <p className="text-[#DA7B7B] text-center font-2xl font-semibold">
          Or Login with
        </p>
        <Link href="#">
          <Image
            className="mx-auto"
            src="/images/google_logo.png"
            width={100}
            height="100"
            alt="google-logo"
          />
        </Link>
      </form>
    </section>
  );
};

export default Login;
