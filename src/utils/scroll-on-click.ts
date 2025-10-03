export const scrollOnClick = (link: string) => {
  const element = document.getElementById(link);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};
