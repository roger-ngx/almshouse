import React from 'react';
import { inject, observer } from 'mobx-react';

const Admin = ({AdminStore}) => {
    const handleFilesChanged = e => AdminStore.uploadImagesToStorage(e.target.files[0]);

    return (
        <div>
            <input type='file' onChange={handleFilesChanged} multiple />
        </div>
    )
}

export default inject('AdminStore')(observer(Admin));