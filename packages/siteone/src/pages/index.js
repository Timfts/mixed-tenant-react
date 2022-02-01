import * as React from "react"
/* import Test from "mxtr-shared/components/templates/HomePage" */

import Card from "mxtr-shared/components/common/Card"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <main css={pageStyles}>
      <Card />
      <p css={{color: "aquamarine"}}>cebola</p>
      <p>main page</p>
    </main>
  )
}

export default IndexPage
