import { type ReactNode } from "react";

interface HeaderImage {
    src: string;
    alt: string;
}

interface HeaderProps {
    image: HeaderImage;
    children: ReactNode;
}

export default function Header({ image, children }: HeaderProps) {
    return (
        <header>
            <img { ...image } />
            { children }
        </header>
    )
}