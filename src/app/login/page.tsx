import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)">
      {/* Box */}
      <div className="flex flex-col md:flex-row h-full md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 shadow-2xl rounded-md">
        {/* Image Container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="Login Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Form Container */}
        <div className="flex flex-col gap-8 md:w-1/2 px-10 py-3">
          <h1 className="text-xl xl:text-3xl font-bold">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt="Logo Google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>

          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt="Logo Facebook"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>

          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
