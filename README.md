# CLC2
🧮 A sophisticated desktop calculator, that functions similarly to Symbolab, just offline!

## Overview & History
CLC2 was originally born as Autofoiler, a simple python CLI script that multiplied binomials for you. As I progressed through math classes, I learned more and wanted to expand this program. It then went through many iterations, and became Calculus-ator, a GUI based derivative, integral, and equation solver... Long story short it was a mess. The binomial feature still worked, but everything else was half baked.<br/><br/>
About a week ago, I started preparing for exams. I thought, wouldn't it be cool if that Calculus-ator program actually did something good for a change? CLC2 (A mistake of shortening Calculus-ator 2) was born.<br/><br/>
But what is it? Glad you asked. CLC2 is an Electron-based crossplatform CAS calculator, that displays in LaTeX. Essentially, an offline version of Symbolab. Need to solve a definite integral with respect to y? Plug it into CLC2. Need to find the derivative of sin(x\*6x)? Plug it into CLC2.
## Screenshots!
![Main View MacOS](/images/scs1.png)
![Calculator View MacOS](/images/scs2.png)
## Features
- [x] Derivatives
- [x] Indefinite Integrals
- [x] Definite Integrals with Respect to Multiple Variables
- [x] Fraction Operations and Simplification (Admit it, you forget sometimes how to do it)
- [x] Pi (Supports equations with pi in it)
- [x] Trigonometric functions (Currently only works in radians, kinda iffy functionality)
- [x] Square Roots
- [x] Factoring
- [x] Basic Math
- [x] Expansion of Equations
- [ ] Gradients
- [ ] Complex Quantities
- [ ] Substitution
- [ ] Symbolic and Numeric Roots
- [ ] Units of Measure
- [ ] Matrices and Tensors
- [ ] **Step By Step Mode** (Is a high priority, but a lot of work, so please be patient)
- [ ] **Graphing Mode** (Shouldn't be too difficult and is being worked on as the first priority behind implementing the other functions)
## Contributing
There are two major ways you can contribute:
- Open issues, pull requests, and give advice on what to improve OR
- Donate! Think about it, although CLC2 is not yet as powerful as Symbolab, your donation, no matter how large, is benefitting students all over! A symbolab membership alone is 12 dollars a year, and doesn't work offline!<br/><br/>
**Both are equally important, and help ensure the success of this project. Community involvement is what opensource strides to be, and all students in math could benefit from such a free, open-source project.**
## Using CLC2
As of now, using CLC2 is very easy. In the release tab, you can download the latest stable version or the highly-unstable ride on the edge version. You can download a .exe installer, a .dmg, or a .deb. Check out the wiki for functions, though most are fairly simple.
## Building
Building CLC2 is very easy, simply clone the repository and run `npm install`. To build a .exe run `npm run package-win`, for a .app `npm run package-mac` and for whatever a linux is `npm run package-linux`. To create installers, do `npm run create-installer-win` for a .exe installer, `npm run create-installer-mac` for a .dmg, and `npm run create-installer-debian` for a .deb.
