import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// import {testfunc} from './legacy-test.js'
// import tinycolor from 'tinycolor2'
// var color = tinycolor('red');
// console.log(testfunc(), color);

import { PenpaConverter } from './penpa-converter'
import { PenpaLoader } from './penpa-loader/penpa-loader'

let url = 'https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VRdb9owFH3nV0x+9gP5bPBb15W9sG4dTFVlIRQgLVED7pxknYL47z2+ThVCMqnaNK0Pk+XLybk3vsfEx/n3MtYJDzG8iA+5g+GGIU3H92kO6zFLiywR7/h5WWyUBuD883jM7+IsTwayrpoP9tVIVNe8+igkcxhnLqbD5ry6Fvvqk6gmvJoixXgIbmKLIsBLC13AG8obdGFJZwh8VWPAW8BVqldZsphY5ouQ1Ywz0+c9vW0g26ofCat1mOeV2i5TQyzjApvJN+ljncnLtXoo61pnfuDVuZU7fZFrutRyvUaugVauQT1yzS7+stzR/HDA3/4VghdCGu3fGhg1cCr2zPOYcDnzfCYC/ARMhMhcIeMjI9kI+uz3Yj5qJIsaIkC1ZGcvBN5zxB7xluKYoktxhoa88ih+oDikGFCcoFvg8gANI6zq8dCiEAg9IyxwScvcULyg6FMMaYEzs59X7tju7k+0vlKOdF2yjx3B7+P5QMJFLFfZIi/1XbzCmSCT4bOD25XbZaJbVKbUY5bu2nXp/U7ppDdlyGR931e/VHp9svpTnGUtwl4aLcqe7hZVaBzdo+dYa/XUYrZxsWkRR8e8tVKyK9oCirgtMX6IT7ptmz0fBuwnoyk9c8X9v6P+1R1lvsHwrfn2rcmh46t0r/dB99gfbK/Na77jdPAdT5uGXVuD7XE22FNzg+r6G2TH4uB+4XKz6qnRjapTr5tWHbubVseOxw1K6Bk='
let pu  = PenpaLoader.loadPenpaPuzzle(url);
let sp = PenpaConverter.convertPenpaPuzzle(pu);
console.log(sp);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
