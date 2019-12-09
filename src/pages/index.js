import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './mystyles.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className='is-size-2 has-text-gray has-text-centered has-text-weight-bold'>Developing​...</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
