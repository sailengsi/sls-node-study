var beautify=require('../node_modules/js-beautify/'),
    htmlBeautify=beautify.html,
    cssBeautify=beautify.css,
    jsBeautify=beautify.js;


function createJsFile(opt){
    var opts=opt || {};
    return `
    module.exports={
        name:'name',
        value:'value',
        async_value:${opts.async_value}
    };
    `;
}

function createHtmlFile(opt){
    var opts=opt || {};
    return `
    <h1>${opts.title}</h1>
    `;
}

var jsData=jsBeautify(createJsFile({
    async_value:'sls'
}),{
    indent_size:4
});
// console.log(jsData);


var htmlData=htmlBeautify(createHtmlFile({
    title:'sls'
}),{
    indent_size:4
});
console.log(htmlData);
