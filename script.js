const fake_bg = document.querySelector('.fake_background')
const company = document.querySelector('.company')
const master = document.querySelector('.company')

let companyWidth = Array.from(getComputedStyle(company).width)
let companyWidthNumb = +companyWidth.slice(0, companyWidth.length-3).join('')
let masterOffset = +master.getBoundingClientRect().left
fake_bg.style.width = `${companyWidthNumb+masterOffset}px`


window.addEventListener('resize', () => {
    companyWidth = Array.from(getComputedStyle(company).width)
    companyWidthNumb = +companyWidth.slice(0, companyWidth.length-3).join('')
    masterOffset = +master.getBoundingClientRect().left
    fake_bg.style.width = `${companyWidthNumb+masterOffset}px`
})

/* let pswrd = document.getElementById('passwd')
let pswrdConf = document.getElementById('conf_passwd')

pswrdConf.addEventListener('focus', () => {
    pswrd = document.getElementById('passwd')
    pswrdConf = document.getElementById('conf_passwd')

    if (pswrd.textContent === pswrdConf.textContent) {
        console.log(true)
        console.log(pswrdConf.textContent)
    } else {
        console.log(false)
        console.log(pswrdConf.textContent)
    }
})
 */