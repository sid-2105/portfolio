import Link from "next/link";

const VARIANT_CLASSES = {
  PRIMARY: "border-purple",
  SECONDARY: "border-tertiary ",
};

const AppLink = ({ href = "", children, variant = "PRIMARY" }) => {
  return (
    <Link 
      href={href} 
      className={`w-fit py-2 px-4 border text-text-tertiary text-center font-medium hover:opacity-75 ${VARIANT_CLASSES[variant] || VARIANT_CLASSES.PRIMARY}`}
    >
      {children}
    </Link>
  );
};


export default AppLink;
