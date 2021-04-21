import React from 'react';


const Buttons = () => {
    return (
        <div class="calculator__btns">
            <div class="calculator__row">
                <div class="calculator__btn" onclick="clean()">C</div>
                <div class="calculator__btn" onclick="insert('%')">%</div>
                <div class="calculator__btn" onclick="plusMinus()">+/-</div>
                <div class="calculator__btn" onclick="insert('/')">÷</div>
            </div>
            <div class="calculator__row">
                <div class="calculator__btn" onclick="insert('7')">7</div>
                <div class="calculator__btn" onclick="insert('8')">8</div>
                <div class="calculator__btn" onclick="insert('9')">9</div>
                <div class="calculator__btn" onclick="insert('*')">x</div>
            </div>
            <div class="calculator__row">
                <div class="calculator__btn" onclick="insert('4')">4</div>
                <div class="calculator__btn" onclick="insert('5')">5</div>
                <div class="calculator__btn" onclick="insert('6')">6</div>
                <div class="calculator__btn" onclick="insert('-')">-</div>
            </div>
            <div class="calculator__row">
                <div class="calculator__btn" onclick="insert('1')">1</div>
                <div class="calculator__btn" onclick="insert('2')">2</div>
                <div class="calculator__btn" onclick="insert('3')">3</div>
                <div class="calculator__btn" onclick="insert('+')">+</div>
            </div>
            <div class="calculator__row">
                <div class="wide-btn calculator__btn" onclick="insert('0')">0</div>
                <div class="calculator__btn" onclick="insert('.')">,</div>
                <div class="calculator__btn" onclick="equal()">=</div>
            </div>
        </div>
    )
}

export default Buttons;