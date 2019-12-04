import {connect} from 'react-redux';

import ReduxCounter from '../components/ReduxCounter';
import {bindActionCreators} from 'redux';

import {reset} from '../state/actions'
import * as actions from '../state/actions';

export function mapStateToProps(state, props) {
    console.log('mapStateToProps props' , props)
    return {
        counter: state.counter
    }
}

export function mapDispatchToProps(dispatch, getState) {
    return {
        reset: bindActionCreators(reset, dispatch),
        counterDispatchers: bindActionCreators(actions, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReduxCounter);