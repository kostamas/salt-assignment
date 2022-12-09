import React, {useState} from 'react';
import './ApiViewerTableRow.scss';
import classNames from 'classnames';

function ApiViewerTableRow({apiDetails, updateApiDetail}: any) {

    const onDetailChange = (detailKey:string, newValue: boolean) => {
        updateApiDetail(detailKey, apiDetails.name, newValue);
    }

    return <div className='api-viewer-table-row api-viewer-table-flex'>
        <div>
            <div className='name'>{apiDetails.name}</div>
        </div>
        <div>
            <div className={classNames(['pointer-opacity', 'pii', apiDetails.pii ? 'selected' : ''])}
                 onClick={() => onDetailChange('pii',!apiDetails.pii)}>
                PII
            </div>
        </div>
        <div>
            <div className={classNames(['pointer-opacity', 'masked', apiDetails.masked ? 'selected' : ''])}
                 onClick={() => onDetailChange('masked', !apiDetails.masked)}>
                MASKED
            </div>
        </div>
        <div>
            <div className='type'>{apiDetails.type}</div>
        </div>
    </div>

}

export default ApiViewerTableRow;
