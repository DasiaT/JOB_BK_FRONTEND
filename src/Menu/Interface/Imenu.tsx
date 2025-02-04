import { ReactNode } from "react";

export interface IMenu {
    label: string;
    icon: ReactNode;
    path: string;
    content: ReactNode;
}

export interface IMenuProps {
    pages: IMenu[];
    isMobile: boolean;
}