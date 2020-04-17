import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I am Mangalam Krishnan. I am working in integrify. I am living in Finland</p>
            <p>Want to work with me? <Link to = '/contact'>Reach out</Link></p>
        </Layout>
    )
}

export default AboutPage
