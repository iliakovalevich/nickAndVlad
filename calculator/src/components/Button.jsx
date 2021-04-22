import React from 'react';

// example with handler 

// const Button = ({ buttonValue, buttonType, handler }) => {
//     return (
//         <button type="button" className={`column ${buttonType}`} onClick={() => handler(buttonValue)}>
//             {buttonValue}
//         </button>
//     );
// };

const Button = ({ buttonValue, buttonType }) => {
    return (
        <button type="button" className={`${buttonType}`}>
            {buttonValue}
        </button>
    );
}

export default Button;