export default function Spinner() {
  return (
    <section className="absolute h-full w-full flex justify-center items-center bg-black text-white z-50">
      <span className="relative inline-block w-32 h-10 border-4 border-white before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:h-4/5 before:w-5 before:animate-animLoader "></span>
    </section>
  );
}