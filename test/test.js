var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml(input, [plugin(opts)]);

   expect(proccessed).to.eql(output);
};

describe('postxml-markdown', function () {
    it('tags', function () {
        test(
            '<p>Text</p><i></i>',
            '<p class="markdown__p">Text</p><i class="markdown__i"></i>'
        );
    });
    it('with options', function () {
        test(
            '<p>Text</p><i></i><h1></h1>',
            '<p class="block__p">Text</p><i class="block__i"></i><div class="block__h1"></div>',
            {
                block: {
                    name: 'block'
                },
                tags: [{
                    name: 'h1',
                    element: 'h1',
                    tag: 'div'
                }]
            }
        );
    });
});
