import React from 'react';
import './BreadCrumbs.scss';

function BreadCrumbs(props: {breadCrumbs: string[]}) {
    const {breadCrumbs} = props;

    return (
        <div className='bread-crumbs-component'>
            {breadCrumbs.map((name, index) => {
                return <span key={index} className='bread-crumb'>
                        {index > 0 ? <img src = "icons/greater-than.png" className='greater-icon'/> : ' '} {name}
                       </span>
            })}
        </div>
    );
}

export default BreadCrumbs;
