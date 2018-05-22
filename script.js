const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listeners

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);

// loop through empties
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    empty.addEventListener('dragover', dragOver);
}

// dragh functions

function dragStart() {
    // test console.log('start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEnd() {
    // test console.log('end');
    this.className = 'fill'; //fill class again after drag
}

function dragOver (e) {
    e.preventDefault();
    console.log('over');

}

function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log('enter')
}

function dragLeave () {
    this.className = 'empty';
    console.log('leave')
}

function dragDrop () {
    this.className = 'empty';
    this.append(fill);
    console.log('drop')
}