const dragEl = document.querySelector('.item')
const placeholders=document.querySelectorAll('.placeholder')


dragEl.addEventListener('dragstart', dragstart)
dragEl.addEventListener('dragend', dragend)

placeholders.forEach(el =>{
    el.addEventListener('dragover',dragover)
    el.addEventListener('dragenter', dragenter)
    el.addEventListener('dragleave', dragleave)
    el.addEventListener('drop', dragdrop)
  
})

function dragstart (ev) {
ev.target.classList.add('holded')
setTimeout(()=>ev.target.classList.add('hide'),0)

}

function dragend (ev) {
ev.target.classList.remove('holded','hide')
}

function dragover(ev){
    ev.preventDefault()
}

function dragenter(ev){
ev.target.classList.add('hover')
}

function dragleave(ev){
ev.target.classList.remove('hover')
}


function dragdrop(ev){
    ev.target.append(dragEl)
    ev.target.classList.remove('hover')
}

