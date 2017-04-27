'use strict';

const tone = jest.genMockFromModule('tone');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.

module.exports = tone;
