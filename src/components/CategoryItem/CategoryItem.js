import React from 'react';
import './CategoryItem.scss';
import classnames from 'classnames';

const CategoryItem = (props) => {
    const categoryClass = classnames({
        'category-item': true,
        'category-1': props.type === 1,
        'category-2': props.type === 2,
        'category-3': props.type === 3,
        'category-4': props.type === 4,
        'category-5': props.type === 5,
        'category-6': props.type === 6,
    });

    return <div className={categoryClass}>
        <h3>
            {props.subText}
            <br />
            <strong>{props.mainText}</strong>
        </h3>
    </div>
}

export default CategoryItem;