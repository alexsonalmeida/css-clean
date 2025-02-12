interface ParagraphProps {
    children: React.ReactNode;
}
  
export function Paragraph({ children }: ParagraphProps) {
    return (
      <p className="font-light text-sm md:text-base leading-6 md:leading-7">
        {children}
      </p>
    );
}  