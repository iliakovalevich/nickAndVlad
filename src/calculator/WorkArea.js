import React, {Component} from "react";

export default class WorkArea extends Component {

    state = {
        text:this.props.content
    }

    toFocus = () => {
        let event = document.getElementById('workArea')
       // event.focus();
       // event.selectionStart = event.value.length + 1;
        event.value = this.props.content;
        if (event.setSelectionRange) {
            event.setSelectionRange(this.props.content.length, this.props.content.length)
        }
        event.focus();
        // this.setState(
        //     {
        //         text:this.props.content
        //     }
        // )
        return this.props.content;
    }

    focusing = () => {
        let event = document.getElementById('workArea')
        if (event.setSelectionRange) {
            event.setSelectionRange(event.value.length, event.value.length)
        }
        event.focus();
    }

    render = () => {
        return (

            <div>
                <input id='workArea' style={{
                    height: 200 //высота
                    ,
                    width: 350 //ширина
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
                       value=
                           {
                               this.props.content == this.state.text ? this.props.content :
                                   this.toFocus()
                           }
                       onfocusin={this.focusing}

                />
            </div>
        )
    }
}