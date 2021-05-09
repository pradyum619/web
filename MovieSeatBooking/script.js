const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');
let ticketPrice = +movie.value;

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    mytotal = ticketPrice*selectedSeatsCount;
    // console.log(count.innerText);
    count.innerText = selectedSeatsCount;
    total.innerText = mytotal;
}

movie.addEventListener('change', (e) =>{
    ticketPrice = +movie.value;
    updateSelectedCount();
});

container.addEventListener('click', (e) => {
    if( e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    
        updateSelectedCount();
    }

});

// movie.addEventListener()