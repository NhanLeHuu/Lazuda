const fs = require('fs');
var lineReader = require('line-reader');
const readline = require('readline');

class IpAddress {
    getIp() {
        const { networkInterfaces } = require('os');

        const nets = networkInterfaces();
        const results = Object.create(null); // Or just '{}', an empty object

        for (const name of Object.keys(nets)) {
            for (const net of nets[name]) {
                // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
                if (net.family === 'IPv4' && !net.internal) {
                    if (!results[name]) {
                        results[name] = [];
                    }
                    results[name].push(net.address);
                }
            }
        }
        // this.configFile()
        return results;
    }

    configFile(ip) {
        if (this.changeNameServer) return
        const pathFEName = __dirname.replace("\\BE\\src\\models", "\\FE\\src\\env\\env.js")
        const pathAPPName = __dirname.replace("\\BE\\src\\models", "\\App\\app\\src\\env\\env.ts")
        const fileNameFE = pathFEName
        const fileNameApp = pathAPPName
        const fileFE = readline.createInterface({
            input: fs.createReadStream(fileNameFE),
            output: process.stdout,
            terminal: false
        });
        const fileApp = readline.createInterface({
            input: fs.createReadStream(fileNameFE),
            output: process.stdout,
            terminal: false
        });
        const ipAddress = ip.toString()
        let resultFE = `export const env = {\n\tserver: "http://${ipAddress}"\n}`
        let resultApp = `export const urlapi = 'http://${ipAddress}:5000';\n`
        fileFE.on('close', () => {
            fs.writeFile(fileNameFE, resultFE, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Fixed FE Name Server Api");
            })
        })
        fileApp.on('close', () => {
            fs.writeFile(fileNameApp, resultApp, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Fixed App Name Server Api");
                console.log("Server Lazuda đã bắt đầu: " + ipAddress + ":5000");
            })
        })


    }

}

module.exports = IpAddress