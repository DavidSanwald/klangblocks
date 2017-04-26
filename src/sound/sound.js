import Tone from 'tone'
import { autorun } from 'mobx'
import store from '../stores/SequencerStore'


const chorus = new Tone.Chorus({
  frequency: 0.3,
  delayTime: 8,
  type: 'triangle',
  depth: 0.8,
  feedback: 0.4,
  spread: 180
})

const pingPong = new Tone.PingPongDelay('4n+8n', 0.1)

pingPong.wet.value = 0.2

const comp = new Tone.Compressor({
  ratio: 10,
  threshold: -30,
  release: 0.1,
  attack: 0.02,
  knee: 10
})


const keys = new Tone.MultiPlayer({
  urls: {
    0: './audio/0.mp3',
    1: './audio/1.mp3',
    2: './audio/2.mp3',
    3: './audio/3.mp3',
    4: './audio/4.mp3',
    5: './audio/5.mp3',
    6: './audio/6.mp3',
    7: './audio/7.mp3',
    8: './audio/8.mp3'
  },
  volume: -7,
  fadeOut: 0.1
})

const instrument = keys.chain(comp, pingPong, Tone.Master)

function buildLoop (instrument, store) {
  const loop = new Tone.Sequence(
    function (time, col) {
      const selectedPads = store.selectedPads
      const playingPads = selectedPads.filter(
        pad => pad.n === col
      )
      playingPads.forEach(pad => instrument.start(pad.m, time, 0, '1', 0))

      Tone.Draw.schedule(
        function () {
          const duration = Tone.Time('4n').toMilliseconds()
          playingPads.forEach(pad => pad.pling(duration))
        },
        time
      )
    },
    [ 0, 1, 2, 3, 4, 5, 6, 7 ],
    '8n'
  )
  return loop
}


export const loop = buildLoop(instrument, store)

autorun(() => {
    store.isRunning? loop.start(): loop.stop()
})
