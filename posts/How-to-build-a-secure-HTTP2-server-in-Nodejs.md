---
title: "How to build a HTTP2 secure server in Nodejs"
author: "Michael Obasi"
description: "How to build a HTTP2 secure server in Nodejs"
banner: "https://i.ytimg.com/vi/BF7uv5fs440/maxresdefault.jpg"
bannerDesc: "content banner"
tags: "JavaScript, Nodejs, HTTP2, certificate"
date: "1617031984406"
---

### Why HTTP2

HTTP2 is a major revision of the HTTP network protocol used by the World Wide Web which promises to make our applications faster, simpler, and more robust — a rare combination — by allowing us to undo many of the HTTP/1.1 workarounds previously done within our applications and address these concerns within the transport layer itself. Even better, it also opens up a number of entirely new opportunities to optimize our applications and improve performance!

### Setup

To setup a HTTP2 server we would first require a SSL certificate, this ensures that data exchange over the network is encrypted. To do this we would have to generate a self signed SSL certificate.

To generate a certificate there a number of tools to help us achieve this: [**mkcert**](https://mkcert.org/). [**Openssl**](https://openssl.org) and [**Ngrok**](https://ngrok.com/).

Next we initialize our project with any package manager of your choice. For this we would be using `yarn`. Then we create our `index.js` file and we update it with this code snippet which sets up a server.
You should ensure you install the `express` package, the `http2` and `fs` package comes prepackages with `Nodejs` and thus does not require installation.

```js
// ES6
import express from "express";
import http2 from "http2";
import fs from "fs";

const app = express();

const options = {
  key: fs.readFileSync('./{ path to your key }.pem'),
  cert: fs.readFileSync('./{ path to your certificate }.pem');
};

const port = process.env.PORT || 3000;

const server = http2.createSecureServer(options, app);

server.listen(port, () => {
  console.log(`Secure server running on PORT ${port}`);
})
```
