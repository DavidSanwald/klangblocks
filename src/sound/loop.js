import Tone from 'tone'






const instrumentConfig = {
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
}



export default function buildLoop (store) {
  const keys = new Tone.MultiPlayer(instrumentConfig)
  const comp = new Tone.Compressor({
    ratio: 10,
    threshold: -30,
    release: 0.1,
    attack: 0.02,
    knee: 10
  })
  const pingPong = new Tone.PingPongDelay('4n+8n', 0.1)
  pingPong.wet.value = 0.2
  const instrument = keys.chain( pingPong, comp, Tone.Master)
  const loop = new Tone.Sequence(
    function (time, col) {
      const selectedPads = store.selectedPads
      const playingPads = selectedPads.filter(
        pad => pad.n === col
      )
      playingPads.forEach(pad => instrument.start(pad.m, time, 0, '1', 0))
      Tone.Draw.schedule(
        function () {
          const duration = Tone.Time('1m-0.5').toMilliseconds()
          playingPads.forEach(pad => pad.pling(duration))
        },
        time
      )
    },
    [ 0, 1, 2, 3, 4, 5, 6, 7 ],
    '8n'
  )
  loop.start()
  Tone.Transport.start()
  return loop
}
