import React from 'react';
import './ApiViewerTable.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {filterApiDetails} from '../ApiViewer.service';
import ApiViewerTableRow from '../apiViewerTableRow/ApiViewerTableRow';
import Accordion from '../../../components/accordion/Accordion';

function ApiViewerTable(props: { apiData: any, currentView: string }) {
    const {apiData, currentView} = props;
    const apiDetailsKeys = ['urlParams', 'queryParams', 'headers', 'body'];
    const filterValue = useSelector((state: RootState) => state.apiViewer.filterValue);
    const showOnlyPii = useSelector((state: RootState) => state.apiViewer.showOnlyPii);
    let apiDetailsFiltered = apiData[currentView];

    apiDetailsFiltered = filterApiDetails(JSON.parse(JSON.stringify(apiDetailsFiltered)), apiDetailsKeys, filterValue, showOnlyPii);

    return <div className='api-viewer-table-component'>
        <div className='table-columns'>
            <div className="api-viewer-table-flex">
                <div className='column-name'>NAME</div>
                <div className='column-name'>PII</div>
                <div className='column-name'>MASKING</div>
                <div className='column-name'>TYPE</div>
            </div>
        </div>

        <div className='separator'/>

        <div className='table-rows'>{
            apiDetailsKeys.map((key, index) => {
                return <span key={index}>
                    {apiDetailsFiltered[key] &&
                    <div key={index}>
                        <Accordion title={key} contentArr={
                            apiDetailsFiltered[key].map((details: any, index: number) => {
                                return <ApiViewerTableRow apiDetails={details} key={index}/>
                            })}/>
                    </div>}
                </span>
            })}
        </div>

    </div>

}

export default ApiViewerTable;
