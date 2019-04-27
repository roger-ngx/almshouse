import React from 'react';
import { inject, observer } from 'mobx-react';

import CategoryItem from '../../components/CategoryItem/CategoryItem';

const CategoryList = ({HomeStore}) => <ul>
    {
        HomeStore.categoryList.map((category, i) => <li key={i}><CategoryItem type={i + 1} mainText={category.mainText} subText={category.subText}/></li>)
    }
</ul>

export default inject('HomeStore')(observer(CategoryList));;