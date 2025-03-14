async function bundleCss() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Bundled CSS!')
      resolve("Bundled css!");
    }, 2000);
  });
}

bundleCss();
