const fake_bg = document.querySelector('.fake_background')
const company = document.querySelector('.company')
const master = document.querySelector('.company')

let companyWidth = Array.from(getComputedStyle(company).width)
let companyWidthNumb = +companyWidth.slice(0, companyWidth.length-3).join('')
let masterOffset = +master.getBoundingClientRect().left
if (companyWidthNumb === 30){
    fake_bg.style.width = `${companyWidthNumb+masterOffset+270}px`
} else {
    fake_bg.style.width = `${companyWidthNumb+masterOffset}px`
}

window.addEventListener('resize', () => {
    companyWidth = Array.from(getComputedStyle(company).width)
    companyWidthNumb = +companyWidth.slice(0, companyWidth.length-3).join('')
    masterOffset = +master.getBoundingClientRect().left
    if (companyWidthNumb === 30){
        fake_bg.style.width = `${companyWidthNumb+masterOffset+270}px`
    } else {
        fake_bg.style.width = `${companyWidthNumb+masterOffset}px`
    }
})

let pswrd = document.getElementById('passwd')
let pswrdConf = document.getElementById('conf_passwd')
const submit = document.querySelector('button')
const msg = document.querySelector('.notmatching')


submit.addEventListener('click', () => {
    pswrd = document.getElementById('passwd')
    pswrdConf = document.getElementById('conf_passwd')

    if (pswrd.value === pswrdConf.value) {
        msg.style.visibility = 'hidden';
        submit.disabled = false;
    } else {
        msg.style.visibility = 'visible';
        submit.disabled = true;
    }
})
