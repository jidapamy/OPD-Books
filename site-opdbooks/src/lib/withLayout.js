import React from 'react'

export default data => Component => {
    return class WithLayout extends React.Component {
        render () {
            return (
                <div>
                    Hello {data.name}
                    this is a sidebar
                    <Component {...this.props} />
                </div>
            )
        }
    }
}
