
    
    
    let showbutton = document.querySelector('.showbutton');
    
    function cardsGenerator(){
        let activities = ["Spend more time outside", 
            "Excersize more", 
            "Eat healthier"];
    }
    activities.foreach( activity => {
let cardHTML = <div class="card">
<p>$(activity)</p>
</div>
    });

    cardsGenerator.insertAdjacentHTML("afterbegin", cardHTML)


         showbutton.addEventListener('click', cardsGenerator)


         let nameInput = document.getElementByID("nameinput");