class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(text) {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        elem.textContent = text;
        elem.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    }
}

const item = new Options(300, 350, "red", 14, "center");

item.createDiv('Some text');