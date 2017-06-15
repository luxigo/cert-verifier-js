'use strict';

import { expect } from 'chai'
import  fs  from 'fs'
import { Certificate } from '../lib/index'

describe('Certificate parsing', function() {
  describe('parse v2', function() {
    it('parses a v2 certificate', function (done) {
      setTimeout(function () {
        fs.readFile('tests/data/sample_cert-valid-2.0.json', 'utf8', function (err, data) {
          if (err) {
            assert.fail();
            done(err);
          }
          let cert = Certificate.parseJson(JSON.parse(data));
          expect(cert.name).to.equal('Arya Stark');
          done();
        });
      });
    }, 500);
  });

  describe('parse v1', function() {

    it('parses a v1 certificate', function (done) {
      setTimeout(function () {
        fs.readFile('tests/data/sample_cert-valid-1.2.0.json', 'utf8', function (err, data) {
          if (err) {
            assert.fail();
            done(err);
          }
          let cert = Certificate.parseJson(JSON.parse(data));
          expect(cert.name).to.equal('Arya Stark');
          expect(cert.signature).to.equal('H0osFKllW8LrBhNMc4gC0TbRU0OK9Qgpebji1PgmNsgtSKCLXHL217cEG3FoHkaF/G2woGaoKDV/MrmpROvD860=');
          done();
        });
      });
    }, 500);
  });


});