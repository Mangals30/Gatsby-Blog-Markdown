import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
const IndexPage = () => {
    return (
        <Layout>
            <h1>Mangalam Krishnan</h1>
            <h2>Integrify </h2>
            <p><a href = 'https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli'>Set Up</a></p>
            <p><Link to = '/contact'>Need a developer?</Link></p>
        </Layout>
    )
}

export default IndexPage