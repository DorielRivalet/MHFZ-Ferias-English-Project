// const html = document.querySelector('html');
// console.log(`loaded: ${html.dataset.currentTheme}`);
// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// if (currentTheme) {
//   html.dataset.theme = `theme-${currentTheme}`;
//   console.log(`Loaded theme-${currentTheme} $`);
// } else{
//   html.dataset.theme = `theme-dark`;
//   console.log(`No theme found. Loaded theme-${currentTheme} $`);
// }

// function switchTheme(theme) {
//   if (theme == html.dataset.theme.substring(6)){
//     console.log(`Theme already switched to ${html.dataset.theme}`);
//     return;
//   }

//   html.dataset.theme = `theme-${theme}`;
//   console.log(`Switched to ${theme} for object ${this} ${html} ${html.dataset}`);

//   localStorage.setItem('theme', theme);
//   console.log(`Saved ${theme} to localStorage`);

//   //html.parentElement.classList.add("component");

//   console.table(localStorage.length)
// }