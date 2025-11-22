export const GithubLink = () => {
  return (
    <div className="mt-24">
      <h3 className="text-center text-2xl font-bold text-white duration-150 md:text-3xl">Github</h3>
      <p className="text-text-secondary py-4 text-center text-lg">
        Want to see more? Visit his Github profile.
      </p>
      <a
        href="https://github.com/douglasyabuki"
        target={'_blank'}
        className="group glass-panel relative m-auto flex h-fit w-fit items-center justify-center rounded-full transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/10 focus:shadow-2xl focus:shadow-white/10"
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          className="h-[200px] w-[200px] rounded-full object-cover opacity-100 ring-4 ring-black group-hover:bg-white/10 group-focus:bg-white/10 sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]"
          src="/github.png"
          alt=""
        />
        <img
          src="/sunglasses.svg"
          alt="Svg from SVGRepo.com"
          className="absolute w-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-5 group-hover:opacity-100 group-focus:translate-y-5 group-focus:opacity-100 sm:group-hover:translate-y-9 sm:group-focus:translate-y-9 lg:group-hover:translate-y-12 lg:group-focus:translate-y-12"
        />
      </a>
    </div>
  );
};
