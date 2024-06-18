export const formatLink = (link: string): string => {
  const words = link.slice(1).replace('-', ' ');
  return words[0].toUpperCase() + words.slice(1).toLowerCase();
};
