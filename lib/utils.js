'use strict'
const crypto = require('crypto')

function normalize(text) {
  let textNormal = text.toLowerCase()
  textNormal = textNormal.replace(/#/g, '')

  return textNormal
}

function extractTags(text) {
  if (!text) return []

  let matches = text.match(/#(\w+)/g)

  if (matches === null) return []

  matches = matches.map(normalize)

  return matches
}

function encrypt(password) {
  let shasum = crypto.createHash('sha256')
  shasum.update(password)
  return shasum.digest('hex')
}

const utils = {
  extractTags,
  normalize,
  encrypt,
}

module.exports = utils
