const Container = ({ children }) => {
  return (
    <>
      <section className="flex flex-col min-h-screen max-w-[480px] p-[16px] mx-auto bg-yellow-100">
        {children}
      </section>
    </>
  );
};

export default Container;
