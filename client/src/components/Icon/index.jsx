import React from 'react'
import {IconContainer} from "./style";
// import notFound from '../../img/error-404.png';

function Icon({path, alt='img', width=20, height=20, ...props}) {
    // if (path === undefined) path = notFound;

    return (
        <IconContainer src={path} alt={alt} width={width} height={height} {...props} />
    )
}

export default Icon;