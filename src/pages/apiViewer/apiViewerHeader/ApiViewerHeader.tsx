import React, {useMemo} from 'react';
import './ApiViewerHeader.scss';
import BreadCrumbs from '../../../components/breadCrumbs/BreadCrumbs';
import classNames from 'classnames';
import {ApiViewerViews} from '../ApiViewer.constant';

function ApiViewerHeader (props: {apiData: any, currentView: string, setCurrentView: any}) {
    const {apiData,currentView, setCurrentView} = props;

    const breadCrumbs = useMemo(() => ['All APIs', apiData.api, apiData.path], [apiData.api, apiData.path]);
    return (
        <div className={'api-viewer-header-component'}>
            <div className={'title'}>
                <div className={'method'}>{apiData.method}</div>
                <div className={'path'}>{apiData.path}</div>
            </div>

            <BreadCrumbs breadCrumbs={breadCrumbs}/>

            <div className='separator'/>

            <div className='api-viewer-tabs-wrapper'>
                <div
                    onClick={() => setCurrentView('request')}
                    className={classNames([currentView === ApiViewerViews.request ? 'selected' : '', 'api-viewer-tab', 'pointer-opacity'])}>
                    Request
                </div>
                <div
                    onClick={() => setCurrentView('response')}
                    className={classNames([currentView === ApiViewerViews.response ? 'selected' : '', 'api-viewer-tab', 'pointer-opacity'])}>
                    Response
                </div>
            </div>
        </div>
    );
}

export default ApiViewerHeader;
