const fs = require("fs");
const http = require("http");
const url = require("url");

const PORT = 8000;

/////////////////////
//Files

// // How to read file and write file in a SYNCHRONOUS way
// // SYNCHRONOUS it is a Blocking Code execution
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("File written");

// // How to read file and write file in an aSYNCHRONOUS way

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     if (err) return console.log('ERROR!');

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/finals.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written");
//       });
//     });
//   });
// });
// console.log("Will read file!");

////////////////////////////
//Server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const patName = req.url;

  if (patName === "/" || patName === "/overview") {
    res.end("This is the Overview");
  } else if (patName === "/product") {
    res.end("This is the Product");
  } else if (patName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not Found</h1> ");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("The server has started on port 8000");
});
