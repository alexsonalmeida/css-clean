interface SubsectionTitleProps {
    children: React.ReactNode;
}
  
export function SubsectionTitle({ children }: SubsectionTitleProps) {
    return (
      <h3 className="font-medium text-lg md:text-xl">
        {children}
      </h3>
    );
}  