import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type codeBlocksProps = {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: codeBlocksProps){
  const lines = code.split('\n');

  return (
    <div className="w-full max-w-3xl] rounded-lg font-mono text-sm">
      <SyntaxHighlighter
        language={language}
        style={github}
        showLineNumbers
        customStyle={{
          margin: 0,
          fontSize: '0.7rem',
          backgroundColor: 'white',
          borderRadius: '0px 0px 6px 6px'
        }}
        lineNumberStyle={{
          minWidth: '2.5em',
          paddingRight: '1em',
          textAlign: 'right',
          color: '#6B7280',
        }}
        className="font-mono"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};