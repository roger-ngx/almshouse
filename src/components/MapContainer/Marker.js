import React from 'react';

const styles = {
    markerContainer: {
        backgroundColor: 'red',
        color: 'white',
        border: 'solid 1px #fff',
        borderRadius: '15px',
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        textAlign: 'center',
        verticalAlign: 'middle',
        boxShadow: '0 0 5px 5px rgba(255,0,0,0.7)',
        cursor: 'pointer'
    },
    qtt: {
        fontSize: '18px',
        fontWeight: 'bold'
    }
}

const Marker = (props) => (<div style={styles.markerContainer}>
    <span style={styles.qtt}>
        {props.text}
    </span>
</div>)

export default Marker;