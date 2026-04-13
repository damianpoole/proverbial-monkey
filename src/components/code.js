import React from 'react'
import { Highlight, themes } from 'prism-react-renderer'

export const Code = ({ codeString, language, ...props }) => {
  return (
    <Highlight
      code={codeString}
      language={language || `text`}
      theme={themes.oceanicNext}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style} {...props}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
