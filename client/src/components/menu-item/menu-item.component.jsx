import React from 'react';
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom';
 const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) => (
    <div  className={`${size} menu-item `} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
   <div style={{backgroundImage:`url(${imageUrl})`}} className="bg-image">

   </div>
    <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">Buy Now</div>
    </div>
</div> 
 );

 export default withRouter(MenuItem);