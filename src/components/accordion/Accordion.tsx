import React, {useState} from 'react';
import './Accordion.scss';
import classNames from 'classnames';

function Accordion(props: { contentArr: any[], title: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const {contentArr, title} = props;

    return <div className={classNames('accordion', isOpen ? 'open' : '')} >
            <div className='title-and-btn'>
                <div className='toggle-btn' onClick={() => setIsOpen(!isOpen)}>
                    <img src="icons/right-triangle.png"/>
                </div>
                <div className='title'>{title}</div>
            </div>
        <div className='content'>{contentArr.map((content, index) => <div key={index}>{content}</div>)}</div>
    </div>
}

export default Accordion;
