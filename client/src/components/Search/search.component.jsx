import React from 'react';
import CollectionItem from '../CollectionItem/collectionitem.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../Redux/Shop/shop.selector';
import {useState,useEffect} from 'react';
import {fetchCollToStart} from '../../Redux/Shop/shop.actions';
import '../CollectionPreview/collectionpreview.styles.scss';
import FormInput from '../FormInput/forminput.component';
const Search = ({collections,fetchCollToStart}) => {
    const [search,setSearch] = useState('');
    const handlechange = (event) => {
        setSearch(event.target.value);
    }
    useEffect(()=>{
        fetchCollToStart();
      },[])
    return(
        <div>
        <form>
            <FormInput type='text' name='search' handleChange={handlechange} style={{width:'50%', margin:'0 auto'}} >
             </FormInput>
        </form>
        {
         search ?( 
         <React.Fragment>
                   
                    
                     <div className="collection-preview">
  
        <div className='preview'>
        {   collections.map((collection) => collection.items.filter( ({name}) => name.toLowerCase().includes(search.toLowerCase()) ).map( item =>(
                    
                    <CollectionItem key={item.id} item={item} className='it'>
             
                      </CollectionItem>
                        ) )
                       )
                      }
        </div>
    </div>
         </React.Fragment>
            ) :
         <h3>Enter</h3>
        }
        </div>
    )
    
}


const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
    fetchCollToStart : () => dispatch(fetchCollToStart())
  });
export default connect(mapStateToProps,mapDispatchToProps)(Search);