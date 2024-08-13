const apiKey = '6546e39bf5529d070f36ebe45eacbca4'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const search = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const iconCOn = document.querySelector('.weatherimg')
const icon = document.querySelector('#icon')


searchBtn.addEventListener('click', () => {
  if (search.value === '' || search.value == undefined) {
    document.querySelector('h2').textContent = 'Please enter a City'
    document.querySelector('h2').style.color = 'orange'
    
  } else {
    apiCall(search.value);
  }

})


const apiCall = async(city) => {
  const respons = await fetch(`${apiUrl}${city}&appid=${apiKey}`)
  var data = await respons.json();
  console.log(data);

  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.humidity').innerHTML = data.main.humidity
  document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`
  document.querySelector('.temp').innerHTML = `${Math.floor(data.main.temp)}°C`

  if (data.weather[0].main == 'Haze') {
    icon.classList.replace('fa-cloud', 'fa-sun')
  }
  else if (data.weather[0].main == 'Cloud') {
    icon.classList.replace('fa-cloud', 'fa-cloud')
  }
  else if (data.weather[0].main == 'Rain') {
    icon.classList.replace('fa-cloud', 'fa-cloud-rain' )
  }

  else if (data.weather[0].main == 'Drizzle') {
    icon.classList.replace('fa-cloud', 'fa-cloud-sun-rain')
  }
  
  
}

