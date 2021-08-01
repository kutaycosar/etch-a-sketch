
const container = document.getElementById('container');



//16 x 16 grid
for (let index = 0; index < 16; index++) {
    const row = document.createElement('div');
    row.classList.add('row');

    
    
    for (let index = 0; index < 16; index++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('id', `box${index}`);
        row.appendChild(box);
        
    }

    

    
    container.appendChild(row)
    
}


//hovering
container.addEventListener('mouseover', function(event){
    if(event.target.classList.contains('box')){
    event.target.style.backgroundColor = 'black';

    }
})


