(function () {
  window.OilPricePage = window.OilPricePage || {};

  function clear(node) {
    node.replaceChildren();
  }

  function createElement(tagName, options = {}, children = []) {
    const node = document.createElement(tagName);

    if (options.className) node.className = options.className;
    if (options.text !== undefined) node.textContent = options.text;
    if (options.htmlFor) node.htmlFor = options.htmlFor;
    if (options.type) node.type = options.type;
    if (options.value !== undefined) node.value = options.value;
    if (options.ariaLabel) node.setAttribute("aria-label", options.ariaLabel);
    if (options.role) node.setAttribute("role", options.role);
    if (options.onClick) node.addEventListener("click", options.onClick);

    for (const [name, value] of Object.entries(options.attrs || {})) {
      node.setAttribute(name, value);
    }

    for (const child of children) {
      if (child === null || child === undefined) continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }

    return node;
  }

  function createArrow(delta) {
    if (!Number.isFinite(delta) || delta === 0) return document.createTextNode("");

    const direction = delta > 0 ? "up" : "down";
    const symbol = delta > 0 ? "↑" : "↓";
    return createElement("span", {
      className: `arrow ${direction}`,
      text: symbol,
      attrs: { title: delta > 0 ? "上涨" : "下降" },
    });
  }

  window.OilPricePage.dom = {
    clear,
    createArrow,
    createElement,
  };
})();
