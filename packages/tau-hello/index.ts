export class TauHello extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        let name: string = '';
        if (this.hasAttribute('name')) {
            name = this.getAttribute('name')!
        }
        name = name.trim()
        if (name.length) {
            shadow.textContent = `Hello, ${name}.`
        } else {
            shadow.textContent = 'Hello'
        }
    }
}

declare global {
    interface Window {
        TauHello: typeof TauHello
    }
}

export default TauHello

if (!window.customElements.get('tau-hello')) {
    window.TauHello = TauHello
    window.customElements.define('tau-hello', TauHello)
}