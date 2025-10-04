export const getLocationHash = (): string => {
  return window.location.hash;
};

export const scrollToId = (link: string) => {
  if (!link) return;
  const element = document.getElementById(link);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};
