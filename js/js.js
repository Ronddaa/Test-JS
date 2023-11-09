function getFileName(file) {
  const toSlice = file.indexOf('.');
  let message;
  

  if (toSlice !== -1) {
    message = file.slice(0, toSlice);
  } else {
    message = file;
  }

  return message;
}


console.log(getFileName("styles.css"));
console.log(getFileName("app.js"));
console.log(getFileName("app"));
console.log(getFileName("index.js"));
console.log(getFileName("index.html"));
console.log(getFileName("index.css"));
console.log(getFileName("index"));

