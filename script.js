let toggleBox = document.getElementById('toggleBox');
let checkBox = document.getElementById('checkBox')
let slider = document.getElementById('slider');
let calendar = document.getElementById('calendar')
let pageViews = document.getElementById('pageViews')
let priceOption = document.getElementById('priceOption')

let pricePlans = [
    {
        views: '10K',
        price: 8
    },

    {
        views: '50K',
        price: 12
    },

    {
        views: '100K',
        price: 16
    },

    {
        views: '500K',
        price: 24
    },

    {
        views: '1M',
        price: 36
    }
]

function updatePlans(e) {
    calendar.innerText = checkBox.classList.contains('checked') ?  'year' : 'month';

    if(checkBox.classList.contains('checked')){
        let priceFloat = (parseFloat(priceOption.innerText) - parseFloat(priceOption.innerText * 0.25)) * 12
        priceOption.innerText = `${priceFloat}`
    }else{
        priceOption.innerText = `${pricePlans[e.value - 1].price}`
    }
}


function updateGradient(rangeValue) {
    const percentage = (rangeValue - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--percentage', percentage + '%');
    
}

updateGradient(slider.value);

toggleBox.addEventListener('click', () => {
    checkBox.classList.toggle('checked')
    toggleBox.classList.toggle('toggleBackground')

    updatePlans(slider)
})

slider.addEventListener('input', (e) => {
  updateGradient(e.target.value);

  pageViews.innerText = `${pricePlans[e.target.value - 1].views}`
  priceOption.innerText = `${pricePlans[e.target.value - 1].price}`

  calendar.innerText = checkBox.classList.contains('checked') ?  'year' : 'month';

  updatePlans(e) 
});


