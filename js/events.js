import{
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinute,
  buttonRemoveMinute,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonLightMode,
  buttonDarkMode, 
  sliderForest,
  sliderRain,
  sliderCoffeeShop,
  sliderFireplace
} from "./elements.js"

export default function({controls, timer, sound}){

  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.buttonPress()
  })

  buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.buttonPress()
  })

  buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.buttonPress()
  })

  buttonLightMode.addEventListener('click', function(){
    controls.activeDarkMode()
  })
  
  buttonDarkMode.addEventListener('click', function(){
    controls.activeLightMode()
  })

  buttonAddMinute.addEventListener('click', function(){
    controls.addMinutes()
    sound.buttonPress()
  })

  buttonRemoveMinute.addEventListener('click', function(){
    controls.removeMinutes()
    sound.buttonPress()
  })

  buttonForest.addEventListener('click', function(){
    controls.forestActive()
    sound.resetAudio()
    sound.forestAudio.play()
  })

  sliderForest.addEventListener('input', function(){
    let audio = sound.forestAudio
    let volume = sliderForest.value
    controls.setVolume(audio, volume) 
  })

  buttonRain.addEventListener('click', function(){
    controls.rainActive()
    sound.resetAudio()
    sound.rainAudio.play()
  })

  sliderRain.addEventListener('input', function(){
    let audio = sound.rainAudio
    let volume = sliderRain.value
    controls.setVolume(audio, volume)
  })

  buttonCoffeeShop.addEventListener('click', function(){
    controls.coffeeShopActive()
    sound.resetAudio()
    sound.coffeeShopAudio.play()
  })

  sliderCoffeeShop.addEventListener('input', function(){
    let audio = sound.coffeeShopAudio
    let volume = sliderCoffeeShop.value
    controls.setVolume(audio, volume)
  })

  buttonFireplace.addEventListener('click', function(){
    controls.fireplaceActive()
    sound.resetAudio()
    sound.fireplaceAudio.play()
  })

  sliderFireplace.addEventListener('input', function(){
    let audio = sound.fireplaceAudio
    let volume = sliderFireplace.value
    controls.setVolume(audio, volume)
  })
}
