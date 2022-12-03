import React from 'react';
import './ApiViewerTableRow.scss';
import classNames from 'classnames';

function ApiViewerTableRow(props: { apiDetails: any }) {
    const {apiDetails} = props;

    return <div className='api-viewer-table-row api-viewer-table-flex'>
        <div>
            <div className='name'>{apiDetails.name}</div>
        </div>
        <div>
            <div className={classNames(['pii', apiDetails.pii ? 'selected' : '' ])}>PII</div>
        </div>
        <div>
            <div className={classNames(['masked', apiDetails.pii ? 'selected' : '' ])}>MASKED</div>
        </div>
        <div>
            <div className='type'>{apiDetails.type}</div>
        </div>
    </div>

}

export default ApiViewerTableRow;
