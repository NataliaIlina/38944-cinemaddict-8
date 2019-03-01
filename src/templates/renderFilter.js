const renderFilter = (
  name,
  isActive = false,
  count = 0,
) => `<a href="#${name.toLowerCase()}" class="main-navigation__item ${
  isActive ? `main-navigation__item--active` : ''
}">
${name}
${count > 0 ? `<span class="main-navigation__item-count">${count}</span>` : ``}
</a>`;

export default renderFilter;
