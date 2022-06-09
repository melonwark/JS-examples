let formattedTime = (mins) => {
  let hours;
  let minutes;
  if((mins / 60) >= 24) {
    let i = Math.floor((mins / 60)/24)
    hours = Math.floor((mins / 60) - (i*24))
    hours = hours > 10 ? hours : '0'+hours
    minutes = (mins%60) > 10? mins%60 :'0'+ mins%60
    } else {
    hours = Math.floor((mins / 60))
    hours = hours > 10 ? hours : '0'+hours
    minutes = (mins%60) > 10? mins%60 :'0'+ mins%60
    
  }
  return  console.log(`${hours}:${minutes}`)
}
formattedTime(9999)
