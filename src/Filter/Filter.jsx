import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
const Filter = () => {

    const dispatch = useDispatch()
    const filterID = useSelector(state => state.filter.filterID)
    return (
        <div>
            <select
                value={filterID}
                onChange={(event) => {
                    dispatch({ type: "CHANGE_FILTER", payload: event.target.value });
                    dispatch({ type: "FILTER_TASK", payload: event.target.value });
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