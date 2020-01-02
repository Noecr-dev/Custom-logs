'use strict'

const log = require('../index');
const chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    expect = chai.expect;

chai.use(sinonChai);
const msg = 'This is a test message';

describe('Custom Log', () => {
    beforeEach(() => {
        sinon.spy(console, 'log');
    });
    afterEach(() => {
        console.log.restore();
    });

    it('Ok log', () => {
        log.ok(msg);
        expect(console.log).to.be.called;
    });

    it('Log log', () => {
        log.log(msg);
        expect(console.log).to.be.called;
    });

    it('Error log', () => {
        log.error(msg);
        expect(console.log).to.be.called;
    });

    it('Warning log', () => {
        log.warning(msg);
        expect(console.log).to.be.called;
    });

    it('Console log, it is not called', () => {
        expect(console.log).not.to.be.called;
    });
});