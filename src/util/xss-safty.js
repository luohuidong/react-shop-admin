function escapeHtml(str) {
  if(!str) return '';
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '$quto;');
  str = str.replace(/'/g, '&#39');
}

export {
  escapeHtml
};
 