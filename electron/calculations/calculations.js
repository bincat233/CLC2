const katex = require('katex');
const Algebrite = require('algebrite');

let x = "0"
let y = "0"
let equation = ""
let solution = ""
let ans = ''

//function that evaluates the digit and return result
function solve()
{
    equation = document.bcalc.txt.value

    if(equation.startsWith('deriv')){
        derivative()
    }

    else if(equation.startsWith('int')){
        integral()
    }

    else if(equation.startsWith('factor')){
        factor()
    }

    else if(equation.includes('tan')){
        tan()
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
    solution = equation
    solution = solution.replace(/deriv/g, '')
    solution = Algebrite.eval(`d${solution}`)
    solution = Algebrite.simplify(solution).toString()
    equation = equation.replace(/deriv\(/g, '\{dy \\over dx\} ')
    equation = equation.slice(0, equation.lastIndexOf(')'))
}

function integral(){ //Function to compute and return the indefinite integral, with respect to X
    solution = equation
    solution = solution.replace(/int/g, '')
    solution = Algebrite.eval(`integral${solution}`)
    solution = Algebrite.simplify(solution).toString()
    equation = equation.replace(/int\(/g, '\\int ')
    equation = equation.slice(0, equation.lastIndexOf(')')) + 'dx.'
}

function factor(){ //Function to factor given equation or polynomial
    solution = equation
    solution = solution.replace(/factor/g, '')
    solution = Algebrite.factor(solution).toString()
    equation = equation.replace(/factor/g, '')
}

function tan(){
    let index = 0
    solution = equation

    solution = solution.replace(/tan/g, '')
    if(equation.includes('+') || equation.includes('-') || equation.includes('/') || equation.includes('*')){
        for(let i = 0; i < equation.length; i++){
            if(equation.indexOf('+') > 0){
                index = equation.indexOf('+')
                break
            }
            if(equation.indexOf('-') > 0){
                index = equation.indexOf('-')
                break
            }
            if(equation.indexOf('/') > 0){
                index = equation.indexOf('/')
                break
            }
            if(equation.indexOf('*') > 0){
                index = equation.indexOf('*')
                break
            }
        }

        solution = solution.slice(solution.indexOf('n')+1, index)
    }

    solution = Algebrite.tan(solution)
    solution = Algebrite.simplify(solution).toString()
}

function basic(){ //Function to do any basic calculations
    solution = equation
    solution = Algebrite.run(solution)
    solution = Algebrite.simplify(solution).toString()
}