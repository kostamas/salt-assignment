import React, {useEffect, useState} from 'react';
import './ApiViewer.scss';
import ApiViewerHeader from './apiViewerHeader/ApiViewerHeader';
import ApiViewerFilter from './apiViewerFilter/ApiViewerFilter';
import ApiViewerTable from './apiViewerTable/ApiViewerTable';
import {ApiViewerViews} from './ApiViewer.constant';
import {getApiData} from './ApiViewer.service';
import {useDispatch, useSelector} from "react-redux";
import {updateApiData} from "../../redux/slices/apiViewerSlice";
import {RootState} from "../../redux/store";

function ApiViewer() {
    const [currentView, setCurrentView] = useState(ApiViewerViews.request);
    const apiData = useSelector((state: RootState) => state.apiViewer.apiData);
    const dispatch = useDispatch();

    useEffect(() => {
        getApiData().then(data => dispatch(updateApiData((data))))
    }, []);

    return <>
        {apiData &&
        <div className="api-viewer-component">
            <ApiViewerHeader currentView={currentView} setCurrentView={setCurrentView}/>

            <div className='api-viewer-content'>
                <ApiViewerFilter/>
                <ApiViewerTable  currentView={currentView}/>
            </div>
        </div>
        }
    </>
}

export default ApiViewer;
