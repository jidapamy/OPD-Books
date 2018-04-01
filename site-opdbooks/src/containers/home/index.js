import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import withLayout from '../../lib/withLayout'
import Home from './home'

// const mapStateToProps = state => ({})

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default compose(
    withLayout({ name: 'Jidapa' })
)(Home)
