function formulario(event) {

event.preventDefault();
    
for(let i = 0; i < event.target.length; i++) {

const area = event.target[i];

 if (area.value) {
            area.parentElement.classList.remove('errado');
            area.parentElement.classList.add('correto');

} else {
            area.parentElement.classList.remove('correto');
            area.parentElement.classList.add('errado');

       
        }
    }
};