const fields = require('./fieldsMapping');

const fieldsToUse = [
  'PropertyID',
  'BuyerName',
  'BuildingTitle',
  'Floor',
  'PropertyTitle',
  'ModelTitle',
  'Rooms',
  'Exposure',
  'Size',
  'Balcony',
  'PriceIncVAT',
  'PStatus',
];

function buildHeader() {
  const html = `<tr>${fieldsToUse.map((f) => `<th>${fields[f].displayName}</th>`).join('')}</tr>`;

  return html;
}

function buildBodyRow(rowData) {
  const content = rowData['@attributes'];
  const html = `
    <tr>
        ${fieldsToUse.map((f) => `<td>${content[f]}</td>`).join('')}
    </tr>`;

  return html;
}

function buildBody(data) {
  const content = data.property;
  const html = content.map((entry) => buildBodyRow(entry)).join('');
  return html;
}

function jsonToTable(data) {
  const html = `
    <table border="1" cellspacing="0">
        ${buildHeader()}
        ${buildBody(data)}
    </table>`;

  return html;
}

function jsonToHtml(data) {
  const html = `
    <html>
        <head>
            <meta charset="UTF-8">
            <style>
                html {
                    direction: rtl;
                    font-family: arial;
                    font-size: 18px;
                }
                table {
                    border: 1px solid #000;
                }
                th, td {
                    padding: 0 6px;
                }
                .market {
                    background-color: #1d1d1d;
                    color: #6d6d6d;
                }
                .sold {
                    background-color: red;
                    color: #fff;
                }
                .precontract {
                    background-color: navy;
                    color: #fff;
                }
                .mishtaken {
                    color: #000;
                }
            </style>
        </head>
        <body>
        ${jsonToTable(data)}
        </body>
    </html>`;

  return html;
}

module.exports = jsonToHtml;
