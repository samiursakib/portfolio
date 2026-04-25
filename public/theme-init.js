try {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.remove('dark');
  }
} catch (e) {}
