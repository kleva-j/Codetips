---
title: "Setup your React application with Webpack 4, Babel and a Nodejs server (PART 1)"
author: "Michael Obasi"
description: "Setup your React application with Webpack 4, Babel and a Nodejs server (PART 1)"
banner: "https://miro.medium.com/max/682/1*_Kdk6tVKObNeAdTIm7fs3Q.png"
bannerDesc: "content banner"
bannerDimension: "680x512"
tags: "JavaScript, React, Webpack, Babel, Nodejs, Express"
published: "1590260849918"
updated: "1618177979351"
---

Today I am going to explain how I use babel to setup a project in ES6 when working in node, and how Webpack can be used when working with react.

In this setup application, we would obviously need to have node installed alongside npm (or yarn) - the installation for this is beyond the scope for this tutorial. To install `Nodejs` follow the link to this tutorial [How to install nodejs](https://www.positronx.io/how-to-install-node-js-on-mac-os/).

To check that you have node and npm installed run this command on your terminal.

```bash
node -v
npm -v
```

Next, we will now create an empty project for this setup application and navigate into it.

```bash
mkdir setup_application
cd setup_application
```

Next, we will use the `npm init` command to create a package.json file for your application. This command prompts you for a number of things, including the name and version of your application and the name of the initial entry point file (by default this is index.js). For now, just accept the defaults.
For a quick setup use

```bash
npm init -y
```

If you display the package.json file `cat package.json`, you will see the defaults that you accepted, ending with the license.

```json
{
  "name": "setup_application",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Next we will install **Express** into the application.

```bash
npm install express --save
```

Next we will create an entry file where we will setup our express server in the to listen on port `8000`.

```js
const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res) => {
  return res.send("Welcome to our setup application");
});

const { log } = console;

const PORT = 8000;

app.listen(PORT, () => {
  log("Server started on port: ", PORT);
});
```

## Babel Setup

Babel enables you to write your code in JavaScript version ES6 (ES2015) and beyond which isn’t supported yet in most browser. With Babel, the code will get transpiled back to vanilla JavaScript so that every browser, without having all JavaScript ES6 and beyond features implemented, can interpret it. In order to get Babel working, you need to install two of its main dependencies.

```bash
npm install --save-dev @babel/core @babel/preset-env
```
