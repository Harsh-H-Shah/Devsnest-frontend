const box = document.querySelector('.box')
const booked = document.querySelector('.booked');
const remaining = document.querySelector('.remaining');


function makeseats(){
    var div = document.createElement('div');
    div.style.width = "75px";
    div.style.height = "50px";
    div.style.backgroundColor = "rgb(226,92,0)";
    div.className = "seat";
    div.style.zIndex = "1";
    div.style.border = "1px rgb(51,8,63) solid";
    div.style.margin = "3px";
    div.classList.add("notBooked");
    return div;
}
for(let i=0;i<36;i+=1){
    box.appendChild(makeseats());
}

let seats = document.querySelectorAll(".seat");
let remainingSeats = seats.length;
let bookedSeats = 0;


    booked.innerText = `Booked seats = ${bookedSeats}`;
    remaining.innerText = `remaining seats = ${remainingSeats}`;

    seats.forEach((seat) => {
    seat.addEventListener("click", () => {
        seat.classList.toggle(".bookingdone");
        seat.classList.contains(".bookingdone") ? bookSeats() : unBookSeats();
    });
    });

    function bookSeats() {
    bookedSeats += 1;
    remainingSeats -= 1;

    booked.innerText = `Booked seats = ${bookedSeats}`;
    remaining.innerText = `remaining seats = ${remainingSeats}`;
    }

    function unBookSeats() {
    bookedSeats -= 1;
    remainingSeats += 1;

    booked.innerText = `Booked seats = ${bookedSeats}`;
    remaining.innerText = `remaining seats = ${remainingSeats}`;
    }