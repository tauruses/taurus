describe('tau-heading', function () {
    describe('element creation', function () {
        it('creates from document.createElement', function () {
            const el = document.createElement('tau-heading');
            assert.equal('TAU-HEADING', el.nodeName);
        });

        it('creates from constructor', function () {
            const el = new window.TauHeading();
            assert.equal('TAU-HEADING', el.nodeName);
        });
    });

    describe('after tree insertion', function () {
        beforeEach(function () {
            document.body.innerHTML = `
                <tau-heading></tau-heading>
            `;
        });

        afterEach(function () {
            document.body.innerHTML = '';
        });

        it('initiates', function () {
            const ce = document.querySelector('tau-heading')
            assert.equal(ce.textContent, '')
        });
    });

    describe('level attribute', function() {
        beforeEach(function() {
            document.body.innerHTML = `
                <tau-heading level="2"></tau-heading>
            `;
        });

        afterEach(function() {
            document.body.innerHTML = '';
        });

        it('level 2 renders \<h2\> tag', function() {
            const ce = document.querySelector('tau-heading');
            const shadow = ce.shadowRoot;
            assert.equal('H2', shadow.children[0].nodeName);
        });
    });
});