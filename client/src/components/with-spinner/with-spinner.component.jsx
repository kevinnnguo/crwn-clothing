import React from 'react'

import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles'

const WithSpinner = WrapppedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrapppedComponent {...otherProps} />
    )
}

export default WithSpinner;