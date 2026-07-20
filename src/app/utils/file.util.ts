export const downloadFile = (
  content: string,
  fileName: string,
  type: string
) => {
  const file = new Blob([content], { type });
  const href = URL.createObjectURL(file);

  const downloadLink = document.createElement('a');
  downloadLink.href = href;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
};
