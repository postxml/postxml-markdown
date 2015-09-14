module.exports = function (options) {

    var tags = [{
        name: 'h1',
        element: 'h1',
        tag: 'h1'
    },{
        name: 'h2',
        element: 'h2',
        tag: 'h2'
    },{
        name: 'h3',
        element: 'h3',
        tag: 'h3'
    },{
        name: 'h4',
        element: 'h4',
        tag: 'h4'
    },{
        name: 'h5',
        element: 'h5',
        tag: 'h5'
    },{
        name: 'h6',
        element: 'h6',
        tag: 'h6'
    },{
        name: 'ol',
        element: 'ol',
        tag: 'ol'
    },{
        name: 'ul',
        element: 'ul',
        tag: 'ul'
    },{
        name: 'li',
        element: 'li',
        tag: 'li'
    },{
        name: 'b',
        element: 'b',
        tag: 'b'
    },{
        name: 'strong',
        element: 'strong',
        tag: 'strong'
    },{
        name: 'i',
        element: 'i',
        tag: 'i'
    },{
        name: 'em',
        element: 'em',
        tag: 'em'
    },{
        name: 'del',
        element: 'del',
        tag: 'del'
    },{
        name: 'a',
        element: 'a',
        tag: 'a'
    },{
        name: 'hr',
        element: 'hr',
        tag: 'hr'
    },{
        name: 'img',
        element: 'img',
        tag: 'img'
    },{
        name: 'q',
        element: 'q',
        tag: 'q'
    },{
        name: 'blockquote',
        element: '',
        tag: 'div'
    },{
        name: 'p',
        element: 'p',
        tag: 'p'
    }];
    var block = {
        name: 'markdown',
        separator: '__'
    };
    if (options) {
        if (options.tags) {
            options.tags.forEach(function (element) {
                tags.forEach(function (tag) {
                    if (tag.name === element.name) {
                        if (element.element) {
                            tag.element = element.element;
                        }
                        if (element.tag) {
                            tag.tag = element.tag;
                        }
                    }
                });
            });
        }
        if (options.block) {
            block.name = options.block.name || block.name;
            block.separator = options.block.separator || block.separator;
        }
    }

    return function ($) {
        tags.forEach(function (element) {
            var tag = element.tag;
            var className = block.name + block.separator + element.element;
            $(element.name).each(function () {
                this.name = tag;
                $(this).addClass(className);
            });
        });
    };
};
