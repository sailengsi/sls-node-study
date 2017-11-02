var fs = require('fs');

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
                                path: 'edit'
                            },
                            {
                                path: 'list'
                            },
                        ]
                    },
                    {
                        path: 'fun2',
                        children: [
                            {
                                path: 'edit'
                            },
                            {
                                path: 'list'
                            },
                        ]
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
                                path: 'edit'
                            },
                            {
                                path: 'list'
                            },
                        ]
                    },
                    {
                        path: 'fun2',
                        children: [
                            {
                                path: 'edit'
                            },
                            {
                                path: 'list'
                            },
                        ]
                    }
                ]
            }
        ]
    }
];

function createDir(parentPath,cfg) {
    cfg.forEach((item) => {
        var curPath=parentPath+item.path;
        console.log(curPath);
        if (item.children && Array.isArray(item.children) && item.children.length) {
            createDir(parentPath+item.path+'/',item.children);
        }
    });
}

createDir('./',config);