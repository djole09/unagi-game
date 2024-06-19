export const formatDate = (date: string): string =>
  date.split('T')[0].replace(/\-/gi, '/');
