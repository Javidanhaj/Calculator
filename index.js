const area = document.getElementById('area');

function addArea(input) {
    area.value += input;
}

function clearArea() {
    area.value = '';
}

function calculate() {
    try{
        area.value = eval(area.value);
    }
    catch(err){
        area.value = 'Error';
    }

}