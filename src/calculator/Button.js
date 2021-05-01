import React from "react";

export default (props) => {
    return (
        <div style={
            {
                fontSize:30,  //размер шрифта
                display: "inline-block",  //Это значение генерирует блочный элемент, который обтекается другими элементами веб-страницы подобно встроенному элементу.
                boxSizing: "border-box", //Свойство box-sizing позволяет изменить этот алгоритм, чтобы свойства width и height задавали размеры не контента, а размеры блока.
                border: '1px solid', //размер границ solid - Тип границы 
                borderColor: 'rgba(1,1,1,0)' //цвет границы
            }
        } >
            <button onClick={props.clickHandler} style={
                props.style ? props.style :
                {
                    width: 84.5,
                    height: 77,
                    margin: 0.5, //внешний отступ
                    display:"flex",  //тип display, Для расположениея элементов
                    justifyContent:"center",  //расположение по-центру , доступно только с display flex
                    alignItems:"center",    //распложение по-центру по высоте , доступно только с display flex
                    boxSizing:"border-box", //Свойство box-sizing позволяет изменить этот алгоритм, чтобы свойства width и height задавали размеры не контента, а размеры блока.
                    backgroundColor: 'rgba(255,255,255,0.2)', //бэкграунд с цветом
                    border: 'rgba(1,1,1,0)', //цвет границы
                    color: "white", //цвет
                    fontSize:30, //размер шрифта
                    fontFamily:'Coronetscript, cursive', //название шрифта 
                    outline:'none' //подстветка по бокам элемента когда наводишься на него через tab 
                }
            } value={props.text}>{props.text}</button>
        </div>
    )
}