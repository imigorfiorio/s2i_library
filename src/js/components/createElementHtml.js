const createElementHtml = (tag, className, content) => {
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = content;
  return element;
};

export default createElementHtml;
