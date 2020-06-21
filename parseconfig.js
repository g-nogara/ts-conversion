const fs = require('fs');

const projectSecrets = ['giphyKEY'];

let fileContent = '';
projectSecrets.map(secret => {
    if (!process.env[secret]) {
        console.log('ERROR: Enviroment missing necessary configuration');
        return;
    }
    fileContent += `export const ${secret} = ${process.env[secret]}\n`;
})

fs.writeFileSync('config.js', fileContent);