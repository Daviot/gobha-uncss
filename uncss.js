'use strict';

const uncss = require('uncss'),
    minimatch = require('minimatch');

/*
 * 
 */

var guncss = options => {
    // console.log(options);
    options = {
        csspath: './build/assets/css/',
        htmlroot: './build',
        report: true
    };
    return (files, metalsmith, done) => {
        let index = 0;
        Object.keys(files)
            .filter(file => {
                return minimatch(file, '*.html', { matchBase: true }) || minimatch(file, '*.php', { matchBase: true });
            })
            .map(file => {
                console.log('=> ', file);
            });
        // .filter(file => {
        //     return minimatch(file, '*.html', { matchBase: true }) || minimatch(file, '*.php', { matchBase: true });
        // })
        // .map(path => {
        //     var content = files[path].contents.toString();
        //     uncss(content, (error, output) => {
        //         if (error) {
        //             console.error('[ERROR] uncss error in', path);
        //             console.error(e);
        //         } else {
        //             console.log(output);
        //             files[path].contents = Buffer.from(output, 'utf8');
        //         }
        //         index++;
        //     });
        // });

        done();
    };
};

module.exports = guncss;
