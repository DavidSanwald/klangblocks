/* eslint-disable no-unused-vars */
const mockLog = jest.fn()
const mockLoop = {
  start: jest.fn(),
  stop: jest.fn(),
  state: 'playing'
}
const buildLoop = function(){
  return mockLoop
}



module.exports= buildLoop
