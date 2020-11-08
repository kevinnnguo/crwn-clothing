import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import CollectionPreview from "../collection-preview/collection-preview.component";
import { SelectCollectionsForPreview } from "../../redux/shop/shop.selector";

import {CollectionOverviewContainer} from './collection-overview.styles'

const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: SelectCollectionsForPreview,
  });

  
export default connect(mapStateToProps)(CollectionOverview);