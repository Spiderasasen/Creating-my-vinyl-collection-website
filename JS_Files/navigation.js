// getting the ids
const vinyl = document.getElementById('Vinyls');
const dac = document.getElementById('Dac');
const headphones = document.getElementById('Headphones');
const vinyl_players = document.getElementById('Vinyl_players');
const other_players = document.getElementById('Other_Players');
const add_on = document.getElementById('Add_ons');

// Navigation for all the items
vinyl.addEventListener('click', () => {
    window.location.href = "Other_screens/Vinyls.html";
    console.log('Vinyls clicked');
})
dac.addEventListener('click', () => {
    window.location.href = "Other_screens/DAC.html";
    console.log('dac clicked');
})
headphones.addEventListener('click', () => {
    window.location.href = "Other_screens/Headphones.html";
    console.log('Headphones clicked');
})
vinyl_players.addEventListener('click', () => {
    window.location.href = "Other_screens/Vinyl_players.html";
    console.log('Vinyl players clicked');
})
other_players.addEventListener('click', () => {
    window.location.href = "Other_screens/Other_Music_Players.html";
    console.log('Other players clicked')
})
add_on.addEventListener('click', () => {
    window.location.href = "Other_screens/Add_ons_for_anything.html";
    console.log('add ons clicked');
})