let x = "0"
let y = "0"
let op = ""
let temp = "0"

//function that evaluates the digit and return result
function solve()
{
    x = eval(x+op+y)
    document.bcalc.txt.value = x.toFixed(3).replace('.000', '')
    op = ""
}

//function that clear the display
function clr()
{
    document.bcalc.txt.value =''
}

function add(){
    x = bcalc.txt.value
    op = '+'
}

function minus(){
    x = bcalc.txt.value
    op = '-'
}

function mult(){
    x = bcalc.txt.value
    op = '*'
}

function div(){
    x = bcalc.txt.value
    op = '/'
}

function decimal(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='.'
    y = bcalc.txt.value
}

function zero2(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='00'
    y = bcalc.txt.value
}

function zero(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='0'
    y = bcalc.txt.value
}

function one(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='1'
    y = bcalc.txt.value
}

function two(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='2'
    y = bcalc.txt.value
}

function three(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='3'
    y = bcalc.txt.value
}

function four(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='4'
    y = bcalc.txt.value
}

function five(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='5'
    y = bcalc.txt.value
}

function six(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='6'
    y = bcalc.txt.value
}

function seven(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='7'
    y = bcalc.txt.value
}

function eight(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='8'
    y = bcalc.txt.value
}

function nine(){
    if((op == "+") || (op == "-") || (op == "/") || (op == "*")){
        clr()
    }
    document.bcalc.txt.value +='9'
    y = bcalc.txt.value
}