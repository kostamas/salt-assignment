import React, {useEffect, useState} from 'react';
import './ApiViewer.scss';
import ApiViewerHeader from './apiViewerHeader/ApiViewerHeader';
import ApiViewerSubHeader from './apiViewerSubHeader/ApiViewerSubHeader';
import ApiViewerFilter from './apiViewerFilter/ApiViewerFilter';
import ApiViewerTable from './apiViewerTable/ApiViewerTable';
import {ApiViewerViews} from './ApiViewer.constant';
import {getApiData} from './ApiViewer.service';

function ApiViewer() {
    const [apiData, setApiData] = useState(null);
    const [currentView, setCurrentView] = useState(ApiViewerViews.request);

    useEffect(() => {
        getApiData().then(data => setApiData(data))
    }, []);

    return <>
        {apiData &&
        <div className="api-viewer-component">
            <ApiViewerHeader apiData={apiData} currentView={currentView} setCurrentView={setCurrentView}/>

            <div className='api-viewer-content'>
                <ApiViewerFilter/>
                <ApiViewerTable apiData={apiData} currentView={currentView}/>
            </div>
        </div>
        }
    </>
}

export default ApiViewer;
