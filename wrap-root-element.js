import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/code'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const child = preProps.children

    if (React.isValidElement(child)) {
      const codeString = child.props.children
      const className = child.props.className || ``
      const match = className.match(/language-(\S+)/)

      if (typeof codeString === `string`) {
        return (
          <Code
            codeString={codeString.replace(/\n$/, ``)}
            language={match ? match[1] : `text`}
          />
        )
      }
    }

    return <pre {...preProps} />
  },
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
