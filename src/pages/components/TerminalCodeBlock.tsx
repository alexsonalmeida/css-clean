import { Copy } from 'lucide-react';

type TerminalCodeBlockProps = {
    code: string
}

const TerminalCodeBlock = ({ code }: TerminalCodeBlockProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-gray-100 w-full max-w-3xl rounded-lg overflow-hidden">
      <div className="flex justify-between w-full items-center px-4 py-2 bg-gray-200">
        <button
          onClick={handleCopy}
          className="text-zinc-400 hover:text-gray-600 transition-colors"
          aria-label="Copy code"
        >
          <Copy size={16}/>
        </button>
      </div>
      <div className="p-2 md:p-4 overflow-x-auto">
        <pre className="text-gray-600 font-mono text-xs md:text-sm">
          {code.split('&&').map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line.trim()}
              {index < code.split('&&').length - 1 && ' && \\'}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default TerminalCodeBlock;