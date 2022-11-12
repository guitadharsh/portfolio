const introPage = document.querySelector('.intro-page')
const introtext = document.querySelector('.intro-text')
const introtext2 = document.querySelector('.intro-text2')
const introtext3 = document.querySelector('.intro-text3')
const introPage3 = document.querySelector('.intro-page3')
const introPage4 = document.querySelector('.intro-page4')
const climax = document.querySelector('.climax')
const climaxText1 = document.querySelector('.climax-end-text1')
const climaxText2 = document.querySelector('.climax-end-text2')


window.addEventListener('scroll', ()=> {
   let offsetY = window.scrollY
   let offsetX = window.scrollX
   console.log(offsetY)

   introPage.style.transform= `translateY(${offsetY * 0.32}px)`
   introtext.style.transform= `translateY(${offsetY * 0.9}px)`
   introPage4.style.transform=`translateY(${offsetY * -0.2}px)`
   introtext3.style.transform=`translateY(${offsetY * -0.4}px)`
   climax.style.transform=`translateY(${offsetY * 30}px)`
   climaxText1.style.transform=`translateY(${offsetY * -100}px)`
   climaxText2.style.transform=`translateY(${offsetY * -50}px)`
})