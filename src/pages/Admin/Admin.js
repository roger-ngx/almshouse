import React from 'react';
import { inject, observer } from 'mobx-react';
import { map } from 'lodash';

import DevTools from 'mobx-react-devtools';

const Admin = ({AdminStore}) => {
    const handleFilesChanged = e => AdminStore.uploadImagesToStorage(e.target.files);

    console.log(AdminStore.uploadedImageUrls);

    return (
        <div>
            <input type='file' onChange={handleFilesChanged} multiple />
            <div>
                {
                   map(AdminStore.uploadedImageUrls, imageUrl => <img alt='' src={imageUrl} style={{width: '100px', height: '100px'}}/>)
                }
            </div>
            <DevTools />
        </div>
    )
}

export default inject('AdminStore')(observer(Admin));