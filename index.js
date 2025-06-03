class SimpleRichTextEditor {
  constructor(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    if (!container) throw new Error('Container no encontrado');

    this.container = container;
    this.container.contentEditable = true;
    this.container.style.minHeight = '150px';
    this.container.style.border = '1px solid #ccc';
    this.container.style.padding = '10px';
  }

  execCommand(command) {
    document.execCommand(command, false, null);
  }

  getHTML() {
    return this.container.innerHTML;
  }

  setHTML(html) {
    this.container.innerHTML = html;
  }
}

export default SimpleRichTextEditor;
