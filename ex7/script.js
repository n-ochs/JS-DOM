// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let sectionHeader = document.getElementById('section-header');
let section = document.querySelector('#section');

sectionHeader.addEventListener('click', function() {
    if (section.style.display === 'none') {
        section.style.display = 'block'; //if section does not have a display style already, set the display style to block.
    }
    else {
        section.style.display = 'none'; //it is already changed to block, so therefore the first if will not run. the else will run now, setting it back to none.
    }
})