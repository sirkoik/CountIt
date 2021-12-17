// trying to implement jest based on
// https://dev.to/thawkin3/how-to-unit-test-html-and-vanilla-javascript-without-a-ui-framework-4io

//{ fireEvent, getByText } = require('@testing-library/dom');
// require('@testing-library/jest-dom/extend-expect');
JSDOM = require('jsdom');
fs = require('fs');
path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;
