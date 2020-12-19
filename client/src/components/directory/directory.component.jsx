import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDir} from '../../Redux/Directory/directory.selector';
const Directory =({sections}) => {
     //   console.log(sections);

         return(
            <div className="directory">
                {
                    sections.map(({id,...otherprops}) => (
                        <MenuItem id={id} {...otherprops}></MenuItem>
                    ))

                }
            </div>
         )
              }

const mapStateToProps = createStructuredSelector({
  sections: selectDir
});

export default connect(mapStateToProps)(Directory);