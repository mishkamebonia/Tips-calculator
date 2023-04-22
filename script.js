const btns = document.querySelectorAll('.calc-btn')
const billInput = document.querySelector('#bill')
const numberOfPeople = document.querySelector('#num-people')
const customInput = document.querySelector('.custom')

const tipAmount = document.querySelector('#amount')
const tipsTotal = document.querySelector('#total')

const reset = document.querySelector('#reset')


btns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.active-btn')?.classList.remove('active-btn')
    
    if(billInput.value === '') {
      billInput.classList.add('empty-input')
      document.querySelector('.bill-alert').style.display = 'block'
    }
    else if(numberOfPeople.value === '') {
      billInput.classList.remove('empty-input')
      document.querySelector('.bill-alert').style.display = 'none'
      numberOfPeople.classList.add('empty-input')
      document.querySelector('.num-people-alert').style.display = 'block'
      
    }
    else {
      Number(btns)
      Number(billInput)
      btn.classList.add('active-btn')
      billInput.classList.remove('empty-input')
      numberOfPeople.classList.remove('empty-input')
      document.querySelector('.bill-alert').style.display = 'none'
      document.querySelector('.num-people-alert').style.display = 'none'

      const totalPercents = ((billInput.value * btn.textContent || billInput.value * btn.value) / 100).toFixed(2)
      tipsTotal.textContent = totalPercents
      
      console.log(btn[4])
      
      const calcAmountPercents = (totalPercents / numberOfPeople.value).toFixed(2)
      tipAmount.textContent = calcAmountPercents

    }
  })
})

reset.addEventListener('click', () => {
  billInput.value = ''
  numberOfPeople.value = ''
  customInput.value = ''
  tipAmount.textContent = '0.00'
  tipsTotal.textContent = '0.00'
  document.querySelector('.active-btn')?.classList.remove('active-btn')
  billInput.classList.remove('empty-input')
  numberOfPeople.classList.remove('empty-input')
  document.querySelector('.bill-alert').style.display = 'none'
  document.querySelector('.num-people-alert').style.display = 'none'
})