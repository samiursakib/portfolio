const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      {children}
    </section>
  );
};

export default Container;
