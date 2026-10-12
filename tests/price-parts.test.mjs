import test from 'node:test';
import assert from 'node:assert/strict';
import {psubParts} from '../lib/price-parts.js';

test('counts leading decimal zeros for the compact price display',()=>{
  assert.deepEqual(psubParts(0.00003),{zeros:4,digits:'3'});
  assert.deepEqual(psubParts(0.0004567),{zeros:3,digits:'4567'});
  assert.deepEqual(psubParts(0.0000012),{zeros:5,digits:'12'});
});
test('removes trailing zeros in the significant-digit group',()=>{
  assert.deepEqual(psubParts(0.000034),{zeros:4,digits:'34'});
  assert.deepEqual(psubParts(0.00001234),{zeros:4,digits:'1234'});
});
test('preserves existing behavior for invalid and nonpositive values',()=>{
  for(const value of [null,undefined,NaN,Infinity,-Infinity,0,-1,'0.00003']) {
    assert.deepEqual(psubParts(value),{zeros:0,digits:'0'});
  }
});
