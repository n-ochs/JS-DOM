// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let sectionHeader = document.getElementById('section-header');
let section = document.querySelector('#section');

sectionHeader.addEventListener('click', function() {
    if (section.style.display === 'none') {
        section.style.display = 'block';
    }
    else {
        section.style.display = 'none';
    }
})