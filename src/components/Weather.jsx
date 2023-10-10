
const Weather = async () => {
  const baseUrl = "http://api.weatherapi.com/v1/current.json?"
  const apiKey = "58f433ea3730490c911225705231010"
  const city = "Novolukoml"
  const res = await fetch(`${baseUrl}key=${apiKey}&q=${city}&aqi=no`)
  const data = await res.json()

  const location = data?.location.name
  const temp = data?.current.temp_c
  const condition= data?.current.condition.text
  const wind = Math.round(data?.current.wind_kph * 1000 / 3600)
  
  
  return (
    <div>
    <h1>{location}</h1>
    <p>temperature: {temp} °C</p>
    <p>condition: {condition} </p>
    <p>wind: {wind} m/s </p>
    </div>
  )
}
export default Weather 
