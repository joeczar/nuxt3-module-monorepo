/* eslint-disable */
// I don't know if this file is still in use, but it hase some eslint issues.
// If it is in use:
// @TODO -> remove disable and clean file

const { resolve } = require("path");

const fs = require("fs");
const { readdir, stat } = require("fs").promises;

// logSizes(__dirname);
const arg = "styleguide";
// const arg = process.argv[2];
const path = resolve(__dirname, "../");
const srcPath = `${path}/${arg}/src`;
console.log(srcPath);
// const moduleArr = getDirNames(`${path}`);
const vueFiles = getComponents(srcPath);
const filesJSON = JSON.stringify(vueFiles, null, 4);
fs.writeFileSync(`testLog/files.json`, filesJSON);

function getDirNames(path) {
  const files = fs.readdirSync(path, { withFileTypes: true });
  // const obj = {};
  const modules = [];
  for (const file of files) {
    const { name } = files[file];
    const pathName = `${path}/${name}`;
    const stats = fs.statSync(pathName);
    if (!stats.isFile()) {
      modules.push(name);
    }
  }
  return modules;
}
function getComponents(path) {
  const files = fs.readdirSync(path, { withFileTypes: true });
  const obj = {};
  for (const file of files) {
    const { name } = file;
    const pathName = `${path}/${name}`;
    const stats = fs.statSync(pathName);
    const nameArr = name.split(".");
    const ext = nameArr[nameArr.length - 1];
    // console.log({ name }, stats.isFile() && ext === "vue");
    if (stats.isFile() && ext === "vue") {
      try {
        const lineReader = require("readline").createInterface({
          input: require("fs").createReadStream(pathName)
        });
        obj[name] = {
          "lang=ts": false,
          "defineComponent(": false,
          h1: false
        };
        lineReader.on("line", (line) => {
          for (const key in obj[name]) {
            console.log({ key, val: line.includes(key), line });
          }
        });
      } catch (err) {
        console.log({ err });
      }
    } else if (stats.isDirectory() && name !== "__snapshots__") {
      obj[name] = getComponents(pathName);
    }
  }
  return obj;
}
// get .vue files
