interface TitleProps {
    children: React.ReactNode;
}
  
export function Title({ children }: TitleProps) {
    return (
      <h2 className="text-gray-800 text-2xl md:text-4xl font-semibold">
        {children}
      </h2>
    );
}  