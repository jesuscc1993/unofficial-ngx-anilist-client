export const toTitleCase = (text: string) => {
  return text.charAt(0) + text.substring(1).toLowerCase();
};

export const sanitizeClassname = (classname: string) => {
  return classname.toLowerCase().replace(/_/g, '-');
};
