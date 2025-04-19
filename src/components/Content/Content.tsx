
import { ReactNode } from 'react';
import './Content.css';

export const Content = ({ children }: { children: ReactNode }) => {
    return <div className="Content">
        {children}
    </div>
}