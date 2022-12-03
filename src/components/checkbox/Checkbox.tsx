import React from 'react';
import './Checkbox.scss';
import classNames from 'classnames';

function Checkbox(props: { value: boolean, onValueChanged: (newValue:boolean) => any }) {
    const {value, onValueChanged} = props;

    return (
        <div className='checkbox-component' onClick={()=>onValueChanged(!value)}>
            <div className={ value ? 'checked': ''}/>
        </div>
    );
}

export default Checkbox;
