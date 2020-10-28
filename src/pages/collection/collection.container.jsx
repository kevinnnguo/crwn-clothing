import {connect} from 'react-redux';
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { SelectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading :  state => !SelectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer
