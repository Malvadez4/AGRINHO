// ANIMAÇÃO AO ROLAR

const elements = document.querySelectorAll(
".box, .content, .impact-card, .sobre img"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold:0.2
});

elements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ANIMAÇÃO DOS NOVOS CARDS

const pesquisaCards = document.querySelectorAll(".pesquisa-card");

pesquisaCards.forEach((card)=>{

    card.classList.add("hidden");

    observer.observe(card);

});