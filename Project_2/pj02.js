function calculator(){
    var number = window.document.getElementById('number')
    var res = window.document.getElementById('result')
    
   if(number.value.length == 0){
    window.alert('Write a number, please!')
   } else {
    let num = Number(number.value)
    let c=1
    res.innerHTML = ` `
   while(c<=10){
    let item = document.createElement('option')
    item.text = `${num} x ${c} = ${num*c}`
    item.value = `res${c}`
    res.appendChild(item)
    c++
   }
   }
   
    
}