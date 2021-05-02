import React, {Component} from "react";

export default class WorkArea extends Component {


    render = () => {
        return (

            <div>
                <input id='workArea' style={{
                    height: 200 //высота
                    ,
                    width: 350 //ширинас
                    ,
                    fontSize: 35 //размер шрифта
                    ,
                    textAlign: "right" //распложение текста справа
                    ,
                    paddingTop: 110 //внутренний отступ
                    ,
                    backgroundColor: 'rgba(1,1,1,0)' //цвет бэкграунда
                    ,
                    border: 0 //убираем границу
                    ,
                    boxSizing: "border-box" //Свойство box-sizing позволяет изменить этот алгоритм, чтобы свойства width и height задавали размеры не контента, а размеры блока.
                    ,
                    color: 'white' //цвет
                    ,
                    outline:'none'//подстветка по бокам элемента когда наводишься на него через tab 
                }
                }
                       value= {
                               this.props.content
                           }
                />
            </div>
        )
    }
}