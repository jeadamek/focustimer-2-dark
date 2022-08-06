export default function(){
  const forestAudio = new Audio("./assets/forest.wav")
  const rainAudio = new Audio("./assets/rain.wav")
  const coffeeShopAudio = new Audio("./assets/coffeeShop.wav")
  const fireplaceAudio = new Audio("./assets/fireplace.wav")
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeShopAudio.loop = true
  fireplaceAudio.loop = true

  forestAudio.volume = 0.5
  rainAudio.volume = 0.5
  coffeeShopAudio.volume = 0.5
  fireplaceAudio.volume = 0.5
  
  function resetAudio(){
    forestAudio.pause()
    rainAudio.pause()
    coffeeShopAudio.pause()
    fireplaceAudio.pause()
  }

  function buttonPress(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

  return{
    forestAudio,
    rainAudio,
    coffeeShopAudio,
    fireplaceAudio,
    resetAudio,
    timeEnd,
    buttonPress,
  }
}