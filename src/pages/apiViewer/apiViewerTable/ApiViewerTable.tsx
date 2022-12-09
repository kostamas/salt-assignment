import React from 'react';
import './ApiViewerTable.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {filterApiDetails} from '../ApiViewer.service';
import ApiViewerTableRow from '../apiViewerTableRow/ApiViewerTableRow';
import Accordion from '../../../components/accordion/Accordion';
import {updateApiData} from "../../../redux/slices/apiViewerSlice";

function ApiViewerTable({currentView}: any) {
    const apiDetailsKeys = ['urlParams', 'queryParams', 'headers', 'body'];
    const filterValue = useSelector((state: RootState) => state.apiViewer.filterValue);
    const showOnlyPii = useSelector((state: RootState) => state.apiViewer.showOnlyPii);
    const apiData = useSelector((state: RootState) => state.apiViewer.apiData);
    const apiDetailsFiltered = filterApiDetails(JSON.parse(JSON.stringify(apiData[currentView])), apiDetailsKeys, filterValue, showOnlyPii);
    const dispatch = useDispatch();

    const updateApiDetail = (key: string, detailKey: string, detailName: string, newValue: any) => {
        const newApiData = JSON.parse(JSON.stringify(apiData))
        const detailToUpdate = newApiData[currentView][key].find((detail: any) => detail.name === detailName);
        detailToUpdate[detailKey] = newValue
        dispatch(updateApiData(newApiData))
    }

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
                                return <ApiViewerTableRow apiDetails={details} key={index}
                                                          updateApiDetail={(detailKey: string, detailName: string, newValue: any) => updateApiDetail(key, detailKey, detailName, newValue)}
                                />
                            })}/>
                    </div>}
                </span>
            })}
        </div>

    </div>

}

export default ApiViewerTable;
