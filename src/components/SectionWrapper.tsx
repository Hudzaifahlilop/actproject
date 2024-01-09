import  { ReactNode } from 'react';

type SectionWrapperProps = {
    children: ReactNode;
    id: string; // Menambahkan properti id ke tipe
    className?: string;
};

const SectionWrapper = ({ children, ...props }: SectionWrapperProps) => (
    <section {...props} className={`py-16 ${props.className || ""}`}>
        {children}
    </section>
);

export default SectionWrapper;
