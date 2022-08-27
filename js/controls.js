export default function Controls({
  buttonPlay,
  buttonPause,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace, 
  minutesDisplay,
  buttonLightMode,
  buttonDarkMode,
  documentBody
}){
  
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function activeLightMode(){
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
    documentBody.classList.add('light-theme')
    documentBody.classList.remove('dark-theme')
  }

  function activeDarkMode(){
    buttonDarkMode.classList.remove('hide')
    buttonLightMode.classList.add('hide')
    documentBody.classList.add('dark-theme')
    documentBody.classList.remove('light-theme')
  }

  function forestActive(){
    buttonForest.classList.add('active')
    buttonRain.classList.remove('active')
    buttonCoffeeShop.classList.remove('active')
    buttonFireplace.classList.remove('active')
  }

  function rainActive(){
    buttonRain.classList.add('active')
    buttonForest.classList.remove('active')
    buttonCoffeeShop.classList.remove('active')
    buttonFireplace.classList.remove('active')
  }

  function coffeeShopActive(){
    buttonCoffeeShop.classList.add('active')
    buttonForest.classList.remove('active')
    buttonRain.classList.remove('active')
    buttonFireplace.classList.remove('active')
  }

  function fireplaceActive(){
    buttonFireplace.classList.add('active')
    buttonForest.classList.remove('active')
    buttonRain.classList.remove('active')
    buttonCoffeeShop.classList.remove('active')
  }

  function addMinutes(){
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
  }

  function removeMinutes(){
    let minutes = Number(minutesDisplay.textContent)
    minutes = minutes < 5 ? 0 : minutes - 5
    
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }

  function setVolume(audio, volume){ 
    audio.volume = volume / 100
  }

  return{
    play,
    pause,
    reset,
    forestActive,
    rainActive,
    coffeeShopActive,
    fireplaceActive,
    addMinutes,
    removeMinutes,
    activeLightMode,
    activeDarkMode,
    setVolume
  }
}
