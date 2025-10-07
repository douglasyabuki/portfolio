const today = new Date();

export const CopyRight = () => {
  return (
    <div className="flex w-full">
      <h2 className="text-white-primary text-sm opacity-40 lg:text-base">
        Douglas Yuji Yabuki @{today.getFullYear()}
      </h2>
    </div>
  );
};
