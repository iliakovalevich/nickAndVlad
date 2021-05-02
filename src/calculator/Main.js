import React, {Component} from "react";
import WorkArea from "./WorkArea";
import Button from "./Button";

class Main extends Component {

    //состояние компонента
    state = {
        //не было null ошибки при первом запуске default падает
        content: ""
    }

    clickHandler = (event) => {
        // достаем строку 
        let newContent = this.state.content;


        switch (event.target.value) {
            case "+/-":
                //при пустом ломаем
                if(newContent == '') break;
                //regex для + - все числа
                let changeMark = new RegExp(/[+\-x]?(\d)+/g);
                //достаем числа возвращает массивы чисел со знаками
                let values = Array.from(newContent.matchAll(changeMark));
                debugger
                //достаем последнее число и меняем ему знак т.к. разбивается на массивы массивов нам надо целое значение первый элемент
                let toChange = values[values.length - 1][0];
                debugger
                //проверка на умножение или деление т.к. разные алгоритмы для замены знаков
                if (toChange.indexOf('x') != -1 || toChange.indexOf('/') != -1) {
                    //достали знак / или X
                    let newPart = toChange.substr(0, 1);
                    debugger
                    //добавили к нему -
                    newPart += '-';
                    //добавляем остальную часть
                    newPart += toChange.substr(1);
                    debugger
                    //заменяем
                    newContent = newContent.replace(toChange, newPart)
                }
                // заменя для + на -
                else if(toChange.indexOf('+') != -1) {
                    newContent = newContent.replace(toChange, toChange.replace('+','-'));
                    
                } 
                // заменя для - на + 
                else if(toChange.indexOf('-') != -1) {
                    newContent = newContent.replace(toChange, toChange.replace('-','+'));
                } 
                // заменя для ничего на 
                else {
                    newContent = newContent.replace(toChange, '-' + toChange);
                }
                break;
            case "C":
                newContent = '';
                break;
            case "=":
                if(newContent == '')
                    break;
                newContent = newContent.replaceAll("x", '*');
                newContent = newContent.replaceAll(",", '.');
                if(newContent.substr(0,1) == '0')
                    newContent = newContent.replace('0', '');
                let reg = new RegExp(/\d*%/g);//regex для числа с процентом
                newContent = this.evalPercent(Array.from(newContent.matchAll(reg)), newContent);
                try {
                    newContent = String(eval(newContent));
                } catch (err) {
                    newContent = '';
                }
                break;
            case ',':
                //проверка на два одинаковых знака
                if(newContent == '' || newContent.substr(newContent.length - 1).match(/[,+\-x/]/g) != null || (newContent + ',').match(/(\d+,\d+),/g) != null)
                    break;
                newContent += event.target.value;
                break;
            case '+':
            case '-':
            case 'x':
            case '/':
                if(newContent == '' || newContent.substr(newContent.length - 1).match(/[,+\-x/]/g) != null)
                    break;
                newContent += event.target.value;
                break;
            case '%':
                if(newContent == '' || newContent.substr(newContent.length - 1).match(/[,+\-x/%]/g) != null)
                    break;
                newContent += event.target.value;
                break;
            default:
                if(newContent.substr(newContent.length - 1).match(/%/g) == null)
                    newContent += event.target.value;
        }

        this.setState({
                content: newContent
            }
        )
    }

    evalPercent(arr, input) {
        if(arr.length == 0) return input;
        let reg = new RegExp(/[\d.,]*%/g); // d - соотв любому цифр симоволу (0-9) , соответствует (. , %)
        let options = new RegExp(/[+\-*/]/g);
        for(let i = 0; i < arr.length; i++) {
            debugger
            let match = reg.exec(input);
            debugger
            let toEv = input.substr(0, match.index);
            debugger
            let isOptions = options.exec(toEv);
            debugger
            toEv = toEv.substr(0, toEv.length - 1);
            if(isOptions == null) {
                input = input.replace(match, '0');
            } else {
                let toPercentage = eval(toEv.replace(',','.'));//число , проценты которого считаем
                let percent = Number(match[0].replace('%', ''));//само процентное число
                input = input.replace(match[0], String(toPercentage * (percent / 100)));//считаем
            }
        }
        return input;
    }

    render() {
        return (
            <div style={
                {
                    width: 350, //ширина
                    height: 600, //высота
                    marginLeft: 600, //внешний отсутп влево 
                    marginTop: 100, //внешний отсутп вверх
                    border: 0, //убираем границу
                    background: 'linear-gradient(to bottom right, #ffbc00 30%, #fe006d 115%)' //цвет границы
                    //background: 'radial-gradient(at top left, #ffb100 50%, #fe006d 110%)'
                }
            }>
                <WorkArea content={this.state.content}/>
                <div style={{display: "block"}}>
                    <Button text={"C"} clickHandler={this.clickHandler}/>
                    <Button text={"+/-"} clickHandler={this.clickHandler}/>
                    <Button text={"%"} clickHandler={this.clickHandler}/>
                    <Button text={"/"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 79}}>
                    <Button text={"7"} clickHandler={this.clickHandler}/>
                    <Button text={"8"} clickHandler={this.clickHandler}/>
                    <Button text={"9"} clickHandler={this.clickHandler}/>
                    <Button text={"x"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 79}}>
                    <Button text={"4"} clickHandler={this.clickHandler}/>
                    <Button text={"5"} clickHandler={this.clickHandler}/>
                    <Button text={"6"} clickHandler={this.clickHandler}/>
                    <Button text={"-"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 79}}>
                    <Button text={"1"} clickHandler={this.clickHandler}/>
                    <Button text={"2"} clickHandler={this.clickHandler}/>
                    <Button text={"3"} clickHandler={this.clickHandler}/>
                    <Button text={"+"} clickHandler={this.clickHandler}/>
                </div>
                <div style={{height: 79}}>
                    <Button style={{
                        width:172,
                        height: 77,
                        display:"flex", //тип display Для расположения элементов 
                        justifyContent:"left", //расположение слева, доступно только при display flex
                        padding: 20, // внутренний отсутп
                        alignItems:"center", //распложение по-центру по высоте , доступно только с display flex
                        textAlign: 'left', //расположение текста по левому краю
                        boxSizing:"border-box", //Свойство box-sizing позволяет изменить этот алгоритм, чтобы свойства width и height задавали размеры не контента, а размеры блока.
                        backgroundColor: 'rgba(255,255,255,0.2)', //цвет бэкграунда
                        border: 'rgba(1,1,1,0)', //цвет границы
                        color: "white", //цвет
                        fontSize:30, //размер шрифта
                        fontFamily:'Coronetscript, cursive', //название шрифта
                        outline:'none' //подстветка по бокам элемента когда наводишься на него через tab 
                    }} text={"0"} clickHandler={this.clickHandler}/>
                    <Button text={","} clickHandler={this.clickHandler}/>
                    <Button text={"="} clickHandler={this.clickHandler}/>
                </div>
            </div>
        )
    }
}

export default Main