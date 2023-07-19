function SplashScreen() {
  return (
    <section className="absolute h-screen w-full flex justify-center items-center bg-black text-white z-50">
      <div className="neonWhite relative inline-block font-logo tracking-wider font-semibold text-4xl lg:text-5xl">
        <span className="animate-neonLight drop-shadow-neonWhite ">l</span>
        <span className="animate-neonLight text-theme-orange mx-0.5 drop-shadow-neonOrange">
          .
        </span>
        <span className="animate-neonLight drop-shadow-neonWhite">garc</span>
        <span className="animate-brokenLight drop-shadow-neonWhite">ia</span>
        <span className="animate-neonLight text-theme-purple ml-1 drop-shadow-neonPurple">
          _
        </span>
      </div>
    </section>
  );
}

export default SplashScreen;
