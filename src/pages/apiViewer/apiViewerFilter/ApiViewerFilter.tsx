import './ApiViewerFilter.scss';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Checkbox from '../../../components/checkbox/Checkbox';
import {updateFilterValue, updateShowOnlyPii} from '../../../redux/slices/apiViewerSlice';

function ApiViewerFilter() {
    const [piiOnly, setPiiOnly] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const applyFilters = () => {
        dispatch(updateShowOnlyPii(piiOnly));
        dispatch(updateFilterValue(inputValue));
    };

    const resetFilter = () => {
        setPiiOnly(false);
        setInputValue('');
        dispatch(updateShowOnlyPii(false));
        dispatch(updateFilterValue(''));
    };

    return <div className='api-viewer-filter-component'>
        <img src="icons/search-icon.png" className='search-icon'/>
        <input className='input'
               placeholder='Search'
               value={inputValue}
               onInput={e => setInputValue((e.target as HTMLTextAreaElement).value)}/>

        <Checkbox value={piiOnly} onValueChanged={value => setPiiOnly(value)}/>
        <div className='show-pii-only'>Show PII only</div>
        <div className='apply pointer-opacity' onClick={applyFilters}>Apply</div>
        <div className='reset-filter pointer-opacity' onClick={resetFilter}>Reset Filter</div>
    </div>
}

export default ApiViewerFilter;
