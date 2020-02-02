function replaceWith(data, string, mode) {
  const elementId = `${data.title}-0`;
  const targetElement = document.getElementById(elementId);
  const regexp = /<span class="searchmatch">(.*?)<\/span>/gi;
  const replacedString = data.snippet.replace(
    regexp,
    `<span class="searchmatch">${string}</span>`
  );

  if (mode === "ALL") {
    const targetElements = document.querySelectorAll(
      `[data-name*="list-item"]`
    );
    targetElements.forEach(item => {
      item.innerHTML = item.innerHTML.replace(
        regexp,
        `<span class="searchmatch">${string}</span>`
      );
    });
    return;
  }

  if (targetElement instanceof HTMLLIElement) {
    targetElement.innerHTML = replacedString;
  }
}
export default replaceWith;
