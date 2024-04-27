document.addEventListener('DOMContentLoaded',function(){
    const tags = document.querySelectorAll('.tag')
    const cards = document.querySelectorAll('.card')

    tags.forEach(tag => {
        tag.addEventListener('click',function(){
            const filter = tag.getAttribute('data-filter')
            filterItems(filter)
            toggleTagSelected(tag)
        })
    })

    function filterItems(filter){
        cards.forEach(card => {
            if(filter === 'all' || card.classList.contains(filter)){
                card.classList.remove('hidden')
            }else{
                card.classList.add('hidden')
            }
        })
    }

    function toggleTagSelected(selectedTag){
        tags.forEach(tag => {
            if(tag === selectedTag){
                tag.classList.add('selected')
            }else{
                tag.classList.remove('selected')
            }
        })
    }
})
