describe('tau-hello', function() {
    describe('element creation', function() {
        it('creates from document.createElement', function() {
            const el = document.createElement('tau-hello');
            assert.equal('TAU-HELLO', el.nodeName);
        });

        it('creates from constructor', function () {
            const el = new window.TauHello();
            assert.equal('TAU-HELLO', el.nodeName);
        });
    });

    describe('after tree insertion', function () {
        beforeEach(function () {
            document.body.innerHTML = `
                <tau-hello></tau-hello>
            `;
        });

        afterEach(function () {
            document.body.innerHTML = '';
        });

        it('initiates', function () {
            const ce = document.querySelector('tau-hello')
            assert.equal(ce.textContent, '')
        });
    });

    describe('name attribute', function() {
        beforeEach(function() {
            document.body.innerHTML = `
                <tau-hello name="Lily"></tau-hello>
            `;
        });

        afterEach(function() {
            document.body.innerHTML = '';
        });

        it('renders Hello, Lily.', function() {
            const ce = document.querySelector('tau-hello');
            const shadow = ce.shadowRoot;
            assert.equal('Hello, Lily.', shadow.textContent);
        });
    });
});