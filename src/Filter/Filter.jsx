import React from 'react';
import ReactDOM from 'react-dom/client';

const Filter =(props) => {
    
    

    return(
        <div>
            <select
             value={props.filter}
             onChange={(event)=>{
                props.setFilter(event.target.value)
                props.dataFilter(event.target.value);
                }}>
                <option
                    value={'date-start'}>
                    Дата: с начала
                </option>
                <option
                    value={'date-end'}>
                    Дата: с конца
                </option>
                <option
                    value={'name-start'}>
                    Имя: с начала
                </option>
                <option
                    value={'name-end'}>
                    Имя: с конца
                </option>
            </select>
        </div>
    )
}
export default Filter;