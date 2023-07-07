function counting() {
    let start = document.getElementById('start_number')
    let ends = document.getElementById('ends_number')
    let step = document.getElementById('step')
    let result = document.getElementById('result')
    

    if (start.value.length ==0 || ends.value.length == 0 || step.value.length==0){
        window.alert('[ERROR] Data is missing')
        result.innerHTML = 'Unable to count'

    } else {
        //window.alert('OK')
        result.innerHTML = 'Counting...'
        let s = Number(start.value)
        let e = Number(ends.value)
        let st = Number(step.value)
        
        if(st<=0) {
            window.alert(' Step invalid! Considering then 1')
            st=1
        }
        
        if(s<e){
            //count up
            for (let c=s; c<=e; c+=st){
                result.innerHTML += ` ${c} \u{1F449} ` /* \u{} is the formatation for emojis in Js */
            }
        } else {
            //countdown
            for (let c=s; c>=e; c-=st){
                result.innerHTML += ` ${c} \u{1F449} `
            }
        }
        
       result.innerHTML += `\u{1F3C1}`
    }
    
}