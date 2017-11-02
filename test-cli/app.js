require('../node_modules/shelljs/global');
var fs = require('fs'),
    beautify = require('../node_modules/js-beautify/'),
    htmlBeautify = beautify.html,
    cssBeautify = beautify.css,
    jsBeautify = beautify.js;



var config = [
    {
        path: 'app',
        children: [
            {
                path: 'module1',
                children: [
                    {
                        path: 'fun1',
                        children: [
                            {
                                path: 'edit',
                                children: [
                                    { file: 'Edit.vue' },
                                    { file: 'Edit.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                            {
                                path: 'list',
                                children: [
                                    { file: 'List.vue' },
                                    { file: 'List.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                            { file: 'index.js' }
                        ]
                    },
                    {
                        path: 'fun2',
                        children: [
                            {
                                path: 'edit',
                                children: [
                                    { file: 'Edit.vue' },
                                    { file: 'Edit.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                            {
                                path: 'list',
                                children: [
                                    { file: 'Edit.vue' },
                                    { file: 'Edit.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                        ]
                    },
                    {
                        file: 'index.js'
                    }
                ]
            },
            {
                path: 'module2',
                children: [
                    {
                        path: 'fun1',
                        children: [
                            {
                                path: 'edit',
                                children: [
                                    { file: 'Edit.vue' },
                                    { file: 'Edit.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                            {
                                path: 'list',
                                children: [
                                    { file: 'Edit.vue' },
                                    { file: 'Edit.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                            { file: 'index.js' }
                        ]
                    },
                    {
                        path: 'fun2',
                        children: [
                            {
                                path: 'edit',
                                children: [
                                    { file: 'Edit.vue' },
                                    { file: 'Edit.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                            {
                                path: 'list',
                                children: [
                                    { file: 'Edit.vue' },
                                    { file: 'Edit.js' },
                                    { file: 'indeex.js' }
                                ]
                            },
                            { file: 'index.js' }
                        ]
                    },
                    { file: 'index.js' }
                ]
            },
            { file: 'index.js' }
        ]
    }
];


/**
 * 递归创建目录和文件
 * @param {*} parentPath   父级目录
 * @param {*} cfg   配置文件
 */
function createDirAndFilee(parentPath, cfg) {
    cfg.forEach((item) => {
        if (item.path) {
            var curPath = parentPath + item.path;
            console.log('dir：', curPath);
            mkdir(curPath);
            if (item.children && Array.isArray(item.children) && item.children.length) {
                createDirAndFilee(parentPath + item.path + '/', item.children);
            }
        }
        if (item.file) {
            var curFile = parentPath + item.file;
            console.log('file：', curFile);
            touch(curFile);
        }
    });
}

createDirAndFilee('./', config);