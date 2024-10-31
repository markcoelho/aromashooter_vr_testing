const express = require('express');
const cors = require('cors');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer({});
const hostname = '0.0.0.0';
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.use('/proxy', (req, res) => {
    proxy.web(req, res, { target: 'http://192.168.244.152:1003' });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/ or http://192.168.244.1:${port}/`);
});
