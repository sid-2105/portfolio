import Link from "next/link";

const VARIANT_CLASSES = {
  PRIMARY: "border-purple hover:bg-purple/20",
  SECONDARY: "border-tertiary hover:bg-tertiary/20",
};

const AppLink = ({ href = "", children, className = "", variant = "PRIMARY" }) => {
  return (
    <Link 
      href={href} 
      className={`w-fit py-2 px-4 border text-text-tertiary text-center font-medium hover:opacity-75 ${VARIANT_CLASSES[variant] || VARIANT_CLASSES.PRIMARY} ${className}`}
    >
      {children}
    </Link>
  );
};


export default AppLink;
