const http = require('http');
const url = require('url');
const fetch = require('node-fetch');
const { xsltProcess, xmlParse } = require('xslt-processor');
const jsonToHtml = require('./jsonToTable');

const xslt = require('./xslt');
const xsltCsv = require('./xslt_csv');

function handleRequest(req, res) {
  fetch(
    'http://www.bmby.com/xml/4033/WebsiteMarketing.xml?ProjectID=8654&UniqueNum=9f1794341bac035198b323acbffc790f',
  )
    .then((resp) => resp.text())
    .then((xml) => {
      const { query } = url.parse(req.url, true);
      const isXls = query.type === 'xls';
      const contentType = isXls ? 'application/vnd.ms-excel' : 'text/html';
      const xsltTemplate = isXls ? xsltCsv : xslt;

      res.writeHead(200, { 'Content-Type': `${contentType}; charset=utf-8;` });

      const body = xsltProcess(xmlParse(xml), xmlParse(xsltTemplate));
      res.end(body);
    });
}

function handleRequestJson(req, res) {
  fetch('https://apt.onoliving.co.il/data.php')
    .then((resp) => resp.json())
    .then((data) => {
      const body = jsonToHtml(data);

      res.end(body);
    });
}
const server = http.createServer(handleRequestJson);
server.listen(1234);
