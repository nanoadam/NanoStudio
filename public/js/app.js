const editorArea = document.querySelector('editor');
let editor = CodeMirror.fromTextArea(editorArea, {
  lineNumbers: true
});
