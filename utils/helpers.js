export async function selectText(node) {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
    document.execCommand("copy");
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
  }
  window.getSelection().removeAllRanges();
}

export function getLangLogo(lang) {
  if (lang === "JavaScript") {
    return "/js.png";
  } else if (lang === "PHP") {
    return "/php.png";
  }

  return "";
}
