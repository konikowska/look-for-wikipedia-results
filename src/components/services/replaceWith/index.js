// @flow

function replaceWith({
  replaceWithPhrase,
  mode
}: {
  replaceWithPhrase: string,
  mode: "SINGLE" | "ALL"
}) {
  const regexpAll = /<span class="searchmatch">(.*?)<\/span>/gi;
  const regexpFirst = /<span class="searchmatch">(.*?)<\/span>/;
  const targetElement = document.querySelector(`[data-name*="list-item"]`);
  const targetElements = document.querySelectorAll(`[data-name*="list-item"]`);

  switch (mode) {
    case "SINGLE":
      if (targetElement instanceof HTMLLIElement) {
        targetElement.innerHTML = targetElement.innerHTML.replace(
          regexpFirst,
          `<span class="searchmatch">${replaceWithPhrase}</span>`,
          1
        );
      }
      break;
    case "ALL":
      targetElements.forEach(item => {
        item.innerHTML = item.innerHTML.replace(
          regexpAll,
          `<span class="searchmatch">${replaceWithPhrase}</span>`
        );
      });
      break;
    default:
      return null;
  }
  return null;
}
export default replaceWith;
