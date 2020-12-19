
import {createStructuredSelector} from 'reselect';
import withLoader from '../../components/Loader/withloader.component';
import {selectCollLoaded} from '../../Redux/Shop/shop.selector';
import {compose} from 'redux';
import { connect } from 'react-redux';
import CollectionPage from './collection.component';
const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectCollLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),withLoader
)(CollectionPage);

export default CollectionPageContainer;