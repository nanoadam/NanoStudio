// import { getFiles } from './controllers/file.js';

var editor = monaco.editor.create(document.getElementById('editor'), {
  value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
  language: 'javascript',
  theme: 'vs-dark',
  fontSize: '18px'
});

// getFiles();
