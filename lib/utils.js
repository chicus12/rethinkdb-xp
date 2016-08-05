'use strict'

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

const utils = {
  extractTags,
  normalize,
}

module.exports = utils
