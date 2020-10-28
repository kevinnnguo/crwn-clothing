import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { SelectIsCollectionFetching } from "../../redux/shop/shop.selector";
import CollectionOverview from './collection-overview.component'

const mapStateToProps = createStructuredSelector({
  isLoading: SelectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
