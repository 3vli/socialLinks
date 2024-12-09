export function setSysTheme() {
   if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
       document.getElementById('toggel').classList.remove('dark');
   } else {
       document.getElementById('toggel').classList.add('dark');
   }
}

document.getElementById('dark').addEventListener('click', function () {
   document.getElementById('toggel').classList.add('dark');
});

document.getElementById('light').addEventListener('click', function () {
   document.getElementById('toggel').classList.remove('dark');
});

document.getElementById('pctheme').addEventListener('click', function () {
   setSysTheme();
});
