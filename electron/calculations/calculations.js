const katex = require('katex');
const Algebrite = require('algebrite');

let equation = ""
let solution = ""
let format = ""
let piformatneed = false

//function that evaluates the input and returns result
function solve()
{
    piformatneed = false

    equation = document.bcalc.txt.value

    solution = equation

    if(equation.includes('pi')){
        pi()
        piformatneed = true
    }

    if(equation.startsWith('deriv')){
        derivative()
    }

    else if(equation.startsWith('defint')){
        defint()
    }

    else if(equation.startsWith('int')){
        integral()
    }

    else if(equation.startsWith('sqrt')){
        sqrt()
    }

    else if(equation.startsWith('factor')){
        factor()
    }

    else if(equation.includes('tan') || equation.includes('sin') || equation.includes('cos') || equation.includes('sec') || equation.includes('csc') || equation.includes('cot')){
        trig()
    }

    else if(equation.includes('+') || equation.includes('-') || equation.includes('*') || equation.includes('/')){
        basic()
    }

    let ans = katex.renderToString(solution, {
        throwOnError: false
    });

    let html = katex.renderToString(equation, {
        throwOnError: false
    });

    document.getElementById("solution").innerHTML = "Solution: "+ans
    document.getElementById("output").innerHTML = "Problem: "+html
}

function clr(){ //Function to clear the calculator's display
    document.bcalc.txt.value =''
}

function derivative(){ //Function to compute and return the derivative, with respect to X
    solution = solution.replace(/deriv/g, '')
    solution = Algebrite.eval(`d${solution}`)
    solution = Algebrite.simplify(solution).toString()
    if(piformatneed){
        piformat()
    }
    equation = equation.replace(/deriv\(/g, '\{dy \\over dx\} ')
    equation = equation.slice(0, equation.lastIndexOf(')'))
}

function integral(){ //Function to compute and return the indefinite integral, with respect to X
    solution = solution.replace(/int/g, '')
    solution = Algebrite.eval(`integral${solution}`)
    solution = Algebrite.simplify(solution).toString()
    if(piformatneed){
        piformat()
    }
    equation = equation.replace(/int\(/g, '\\int ')
    equation = equation.slice(0, equation.lastIndexOf(')')) + 'dx.'
}

function defint(){ //Function to compute and return the indefinite integral, with respect to X
    solution = solution.replace(/defint/g, '')
    solution = Algebrite.eval(`defint${solution}`)
    solution = Algebrite.simplify(solution).toString()
    if(piformatneed){
        piformat()
    }
    let range = equation.replace(/\)/g, '')
    range = range.split(',')
    equation = equation.replace(/defint\(/g, `\\int_${range[2]}^${range[3]} `)
    equation = equation.slice(0, equation.lastIndexOf(')'))
}

function sqrt(){ //Function to return the square root of the input
    solution = solution.replace(/sqrt/g, '')
    solution = Algebrite.eval(`sqrt(${solution})`)
    solution = Algebrite.simplify(solution).toString()
    if(piformatneed){
        piformat()
    }
    equation = equation.replace(/sqrt\(/g, '\\sqrt')
    equation = equation.slice(0, equation.lastIndexOf(')'))
}

function factor(){ //Function to factor given equation or polynomial
    solution = solution.replace(/factor/g, '')
    solution = Algebrite.factor(solution).toString()
    if(piformatneed){
        piformat()
    }
    equation = equation.replace(/factor/g, '')
}
function trig(){ //Function to evaluate trig functions
    solution = Algebrite.run(solution)
    solution = Algebrite.simplify(solution).toString()
    if(piformatneed){
        piformat()
    }
}

function basic(){ //Function to do any basic calculations
    solution = Algebrite.run(solution)
    solution = Algebrite.simplify(solution).toString()
    if(piformatneed){
        piformat()
    }
}

function pi(){ //Function to set the word pi to the number
    format = equation
    equation = equation.replace(/pi/g, Math.PI)
}

function piformat(){ //Function to clean up the appearance of pi
    equation = format
}