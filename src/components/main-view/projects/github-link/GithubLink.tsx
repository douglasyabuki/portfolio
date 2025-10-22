export const GithubLink = () => {
  return (
    <div className="subsection gap-20">
      <h1 className="text-center! text-3xl font-bold duration-150 md:text-4xl xl:text-5xl 2xl:text-6xl">
        Github
      </h1>
      <h2 className="py-4 text-center text-xl opacity-70 md:text-2xl 2xl:text-4xl">
        Want to see more? Visit his Github profile.
      </h2>
      <a
        href="https://github.com/douglasyabuki"
        target={'_blank'}
        className="group relative container m-auto flex h-fit w-fit items-center justify-center rounded-full bg-none shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-red-700/10"
      >
        <img
          className="cover xs:w-[250px] w-[200px] rounded-full opacity-80 ring-4 ring-black transition-all duration-300 ring-inset group-hover:bg-red-700/100 md:w-[400px] lg:w-auto"
          src="/github.png"
          alt=""
        />
        <img
          src="/sunglasses.svg"
          alt="Svg from SVGRepo.com"
          className="absolute w-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-5 group-hover:opacity-100 md:group-hover:translate-y-9 lg:group-hover:translate-y-12"
        />
      </a>
    </div>
  );
};
