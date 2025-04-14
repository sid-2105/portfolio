export const Section = ({children, className}) => {
  return (
    <section className={`my-8 p-4 flex items-center justify-center relative md:p-8 ${className}`}>
      {children}
    </section>
  );
};

export const WrapSection = ({children, className}) => {
  return (
    <div className={`w-full max-w-[1024px] ${className}`}>
      {children}
    </div>
  );
};