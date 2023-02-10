class TauHeading extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        let level = 1;
        if (this.hasAttribute('level')) {
            level = Math.min(Math.max(parseInt(this.getAttribute('level')!), 1), 6)
        }
        const heading = document.createElement(`h${level}`);
        const slot = document.createElement('slot')
        heading.appendChild(slot);
        shadow.appendChild(heading)
    }
}

declare global {
    interface Window {
        TauHeading: typeof TauHeading
    }
}

export default TauHeading

if (!window.customElements.get('tau-heading')) {
    window.TauHeading = TauHeading
    window.customElements.define('tau-heading', TauHeading)
}