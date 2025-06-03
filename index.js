class SimpleRichTextEditor {
  constructor(container, options = {}) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    if (!container) throw new Error('Container no encontrado');

    this.container = container;
    this.container.contentEditable = true;
    this.container.style.minHeight = '150px';
    this.container.style.border = '1px solid #ccc';
    this.container.style.padding = '10px';

    // Aplicar tema inicial
    this.setTheme(options.theme || 'light');
  }

  setTheme(theme) {
    if (theme === 'dark') {
      this.container.style.backgroundColor = '#1e1e1e';
      this.container.style.color = '#ffffff';
      this.container.style.border = '1px solid #555';
    } else {
      this.container.style.backgroundColor = '#ffffff';
      this.container.style.color = '#000000';
      this.container.style.border = '1px solid #ccc';
    }
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
