const btn = document.querySelector('.btn')
let message = document.querySelector('.input').value


btn.addEventListener('click',()=>{
    const token = '5140677785:AAF0Q9TIUXJNMMiwuT6JbpXspMfjgxRyrtc'
    const profileId = '-1001319781327'
    let message = document.querySelector('.input').value
    let url = 'https://api.telegram.org/bot' + token +'/sendMessage?chat_id=' + profileId + '&text='
    let xttp = new XMLHttpRequest()
    xttp.open("GET",url + message,true)
    xttp.send()
    document.querySelector('.input').value = ''
})



// https://api.telegram.org/bot5140677785:AAF0Q9TIUXJNMMiwuT6JbpXspMfjgxRyrtc/sendMessage?chat_id=751639920&text=hi-bot 
// https://api.telegram.org/bot5140677785:AAF0Q9TIUXJNMMiwuT6JbpXspMfjgxRyrtc/getUpdates параметры пользователя
