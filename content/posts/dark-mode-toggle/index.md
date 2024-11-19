---
title: Dark Mode Toggle
description: Dark mode without the flash of default theme
date: 2021-04-21
draft: false
slug: /pensieve/dark-mode-toggle
tags:
  - Theming
  - Dark Mode
---

Dark mode toggle without the flash of default theme. Important bits:

- CSS variables for color theming
- Put `data-theme` attribute on `<html>`, not `<body>`, so we can run the JS before the DOM finishes rendering
- Run local storage check in the `<head>`
- JS for toggle button click handler can come after render

## HTML

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ...
    <script>
      // Check for stored theme or fallback to system preference
      const localStorageTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = localStorageTheme || (prefersDark ? 'dark' : 'light');

      // Apply the theme before DOM finishes rendering
      document.documentElement.setAttribute('data-theme', theme);
    </script>
  </head>
  <body>
    <div class="theme-toggle">
      <button
        class="theme-toggle-btn js-theme-toggle"
        aria-label="Activate dark mode"
        title="Activate dark mode"
      >
        <!-- Icons for light/dark -->
        <svg class="light-mode" role="img">
          <use xlink:href="#sun"></use>
        </svg>
        <svg class="dark-mode" role="img">
          <use xlink:href="#moon"></use>
        </svg>
      </button>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

## CSS Variables

```css
:root {
  --bg: #ffffff;
  --text: #000000;
}

[data-theme='dark'] {
  --bg: #000000;
  --text: #ffffff;
}

body {
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s;
}

.theme-toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
}
```

## JavaScript

```js:title=app.js
const themeToggleBtn = document.querySelector('.js-theme-toggle');

// Define toggle handler
const onToggleClick = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Update theme and save preference
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Update button attributes
  const label = `Activate ${currentTheme} mode`;
  themeToggleBtn.setAttribute('aria-label', label);
  themeToggleBtn.setAttribute('title', label);
};

// Initialize button state
(() => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const initialLabel = `Activate ${currentTheme === 'light' ? 'dark' : 'light'} mode`;
  themeToggleBtn.setAttribute('aria-label', initialLabel);
  themeToggleBtn.setAttribute('title', initialLabel);
})();

// Attach click handler
themeToggleBtn.addEventListener('click', onToggleClick);

```

## Resources

- <https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/>
- <https://css-tricks.com/flash-of-inaccurate-color-theme-fart/>
- <https://mxb.dev/blog/color-theme-switcher/>
- <https://www.joshwcomeau.com/react/dark-mode/>
- <https://web.dev/prefers-color-scheme/>
