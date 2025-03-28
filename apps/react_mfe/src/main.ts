import('./bootstrap')
  .then(module => module.mountReactApp(document.getElementById('root') as HTMLElement))
  .catch(err => console.error(err));
