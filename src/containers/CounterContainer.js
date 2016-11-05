import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { incValue, decValue } from '../actions/counterActionCreator'

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.counter.get('value')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        incValue: () => {
            dispatch(incValue())
        },
        decValue: () => {
            dispatch(decValue())
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        counter: {
            value: stateProps.value,
            decValue: dispatchProps.decValue,
            incValue: dispatchProps.incValue
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Counter)