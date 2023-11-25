//function roundNumbers(value) {  com essa função eu poderia arredondar os números também.
//    value = value.toFixed(2)
//    return 'R$ ' + value
//}

function formatSplit (value) {
    if (value == 1) return value + ' Pessoa'
    else return value + ' Pessoas'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    //console.log({bill, tipPercent, split}) entre chaves você consegue ver cada item e seu valor.

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = Math.round(tipPercent) + ' %'
    document.getElementById('tipValue').innerHTML = 'R$ ' + Math.round(tipValue)
    document.getElementById('totalWithTip').innerHTML = 'R$ ' + Math.round(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = 'R$ ' + Math.round(billEach)
}