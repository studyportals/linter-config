const fs = require('fs');
const https = require('https');
const chalk = require('chalk');
const path = require('path');

downloadEslint().then(writeEslint);

function downloadEslint() {
    return new Promise((resolve, reject) => {
        https.get('https://raw.githubusercontent.com/studyportals/CodeStyle/master/.eslintrc.js', (res) => {
            const { statusCode } = res;

            console.log('Downloading', chalk.bold('.eslintrc.js'), 'from repo', chalk.bold('CodeStyle'));

            if (statusCode !== 200) {
                console.log(chalk.bgRed(`Downloading .eslintrc.js, failed, status code: ${statusCode}`));
                // consume response data to free up memory
                res.resume();
                reject({ statusCode });
                return;
            }

            res.setEncoding('utf8');
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                resolve(data);
                return data;
            });

        }).on('error', (e) => {
            console.error(chalk.bgRed(`Got error: ${e.message}`));
            reject(e);
        });
    })
};

function writeEslint(data) {
    fs.writeFile('./index.js', data, (err) => {
        if (err) throw err;

        console.log(chalk.green('eslint config has been saved!'));
    });
}