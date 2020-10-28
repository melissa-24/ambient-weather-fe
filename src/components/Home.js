import React from 'react'
import tree from '../images/tree.png'

class Home extends React.Component {

    render() {
        return (
            <>
            <div className='about'>
                <h1>About Family Weather</h1>
                <p>
                    In our not so little family we grew up watching The Weather Channel.  Knowing what was going on was always interesting to us.  That hasn't changed
                </p>
                <p>
                    Now some of us have Personal Weather Stations.  However we don't all live in the same home, town or even state anymore.  So creating a central place to look at the weather that we are reporting is the basis behind the site.  More stations or alternate ways to get the data from every member will be added.  For now click the links to see what the weather is like for the family.
                </p>
                <p>
                    Here is our Family = As the GrandChildren move away I am sure we will add to the locations where we track weather
                    <img src={tree} alt="" />
                </p>
            </div>
            </>
        )
    }
}

export default Home