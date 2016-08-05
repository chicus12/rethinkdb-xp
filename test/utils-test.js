'use strict'

import test from 'ava'
import utils from '../lib/utils'

test('extracting hashtags from text', t => {
  let tags = utils.extractTags('The #fOOd in #pizzahutcr is #osom and amazing #100 #AVA ##yes')

  t.deepEqual(tags, [
    'food',
    'pizzahutcr',
    'osom',
    '100',
    'ava',
    'yes',
  ])

  tags = utils.extractTags('The food in pizzahutcr is amazing')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})

test('mormalize text', t => {
  const text = utils.normalize('#FoOd')
  t.deepEqual(text, 'food')
})
