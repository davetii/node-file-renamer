const path = require('path');
const fs = require('fs-extra');
const klaw = require('klaw');

const items = [];
const rootFolder = 'D:\\music';

const TARGET_FILE_NAME = 'artist-background (1).jpg';
const NEW_FILE_NAME = 'artist-background.jpg';

klaw(rootFolder)
    .on('data', function (item) {
        if(!item.stats.isDirectory()) {
            if ((path.parse(item.path).name + path.parse(item.path).ext) === TARGET_FILE_NAME) {
                items.push(item.path);
            }

        }
    })
    .on('end', () => {
        items.forEach(function(p) {
            fs.rename(p, path.parse(p).dir + path.sep + NEW_FILE_NAME );
        });
    });

