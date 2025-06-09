export const useCopyToClipboard = () => {
  // Example hook
  const copyToClipboard = (text: string) => {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(text);
  };

  return copyToClipboard;
};
