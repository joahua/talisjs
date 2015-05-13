/*
 * talisjs
 * https://github.com/joahua/talisjs
 *
 * Copyright (c) 2015 Josh Street
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var talisjs = require('../lib/talisjs.js');

describe('talisjs', function(){
    it('is defined', function(){
      talisjs.should.be.a('function');
    });

});
