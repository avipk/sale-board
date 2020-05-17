const  http = require('http');
const  fetch = require('node-fetch');
const { xsltProcess, xmlParse } = require('xslt-processor');
const xslt = require('./xslt');



function handleRequest(req, res) {
    fetch('http://www.bmby.com/xml/4033/WebsiteMarketing.xml?ProjectID=8654&UniqueNum=9f1794341bac035198b323acbffc790f')
        .then(resp => resp.text())
        .then(xml => {
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            const body = xsltProcess(
                xmlParse(xml),
                xmlParse(xslt)
            );
            res.end(body);
        });
}

const server = http.createServer(handleRequest);
server.listen(80);