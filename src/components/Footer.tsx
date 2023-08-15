import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between uppercase text-red-500 h-12 md:h-24 p-4 lg:px-20 xl:px-40">
      <Link href="/" className="font-bold text-xl">
        <span className="text-green-600">m</span>y{" "}
        <span className="text-green-600">p</span>astas
      </Link>
      <p>© all rigths reserved.</p>
    </div>
  );
};

export default Footer;
