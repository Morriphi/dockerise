const Browser = require('zombie');

describe('User visiting homepage', function () {
    const browser = new Browser();

    it('should see number of times the api was called', function (done) {
        browser.visit('http://web:3000/', function() {
            browser.assert.text('body', 'Api called 1 times!');
            browser.visit('http://web:3000/', function() {
                browser.assert.text('body', 'Api called 2 times!');
                done();
            });
        });
    });
});
