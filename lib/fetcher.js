let fetch = require('node-fetch')

async function getBuffer(url, opts = {}) {
response = await fetch(url, opts)
if (response.status !== 200) throw { status: response.status, message: response.statusText, data: await response.text() }
return response.buffer()
}

async function getJson(url, opts = {}) {
response = await fetch(url, opts)
if (response.status !== 200) throw { status: response.status, message: response.statusText, data: await response.text() }
return response.json()
}

async function getText(url, opts = {}) {
response = await fetch(url, opts)
if (response.status !== 200) throw { status: response.status, message: response.statusText, data: await response.text() }
return response.text()
}


module.exports = { buffer: getBuffer, json: getJson, text: getText }
