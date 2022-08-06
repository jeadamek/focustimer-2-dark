const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddMinute = document.querySelector('.add-minute')
const buttonRemoveMinute = document.querySelector('.remove-minute')
const buttonForest = document.querySelector('#forest')
const buttonRain = document.querySelector('#rain')
const buttonCoffeeShop = document.querySelector('#coffee-shop')
const buttonFireplace = document.querySelector('#fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')
const documentBody = document.querySelector('body')
const sliderForest = document.querySelector('#forest input')
const sliderRain = document.querySelector('#rain input')
const sliderCoffeeShop = document.querySelector('#coffee-shop input')
const sliderFireplace= document.querySelector('#fireplace input')

export{
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinute,
  buttonRemoveMinute,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay, 
  buttonLightMode,
  buttonDarkMode,
  documentBody,
  sliderForest,
  sliderRain,
  sliderCoffeeShop,
  sliderFireplace
}