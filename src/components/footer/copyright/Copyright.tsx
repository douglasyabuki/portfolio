const today = new Date();

export const CopyRight = () => {
  return (
    <div className="flex w-full">
      <h2 className="text-white-primary opacity-40 text-sm lg:text-base">
        Douglas Yuji Yabuki @{today.getFullYear()}
      </h2>
    </div>
  );
};
