const katex = require('katex');
const Algebrite = require('algebrite')
const maths = {
    '\\frac{d': (z) => Algebrite.eval('d('+String(z)+')').toString(),
}

let x = "0"
let y = "0"
let op = ""
let solution = ""
let equation = ""
let ans = ''
let raw = ""


//function that evaluates the digit and return result
function solve()
{
    equation = document.bcalc.txt.value

    if(equation.startsWith('!')){ //TODO: Actually make the step-by-step mode
        equation = equation.replace('!', '')
        solution = equation

        if(solution.startsWith('\\frac{d')){ //Derivative, with respect to X
            solution = solution.substring(solution.indexOf("("))
            solution = solution.replace(/(\\left)|(\\right)/g, "")
            if(solution.includes('\\cdot')){
                solution = solution.replace(/\\cdot/g, "*")
            }
            if(solution.includes('\\frac{')){
                solution = solution.replace(/\\frac/g, '')
                solution = solution.replace(/(\{)/g, '(')
                solution = solution.replace(/\}/g, ')')
            }
            if(solution.includes('{') || solution.includes('}')){
                solution = solution.replace(/(\{)/g, '(')
                solution = solution.replace(/\}/g, ')')
            }
            if(solution.includes('x')){
                raw = String(maths['\\frac{d'](solution, 'x'))
            }
            var ans = katex.renderToString(raw, {
                throwOnError: false
            });
        }

        if(solution.startsWith('\\int')){ //Integral, with respect to X
            solution = solution.substring(solution.indexOf(":")+1)
            solution = solution.replace(/(\\left)|(\\right)/g, "")
            console.log(solution)
        }

        document.getElementById("solution").innerHTML = "Solution: "+ans
    }
    else if(!(equation.startsWith('!'))){
        document.getElementById("solution").innerHTML = ''
    }

    var html = katex.renderToString(equation, {
        throwOnError: false
    });

    document.getElementById("output").innerHTML = "Problem: "+html
    /*else{
        x = eval(x+op+y)
        document.bcalc.txt.value = x.toFixed(3).replace('.000', '')
        op = ""
    }*/
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