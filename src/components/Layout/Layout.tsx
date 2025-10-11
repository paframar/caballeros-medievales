import type { ReactNode } from "react";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        © {new Date().getFullYear()} www.caballerosmedievales.com
      </footer>
    </div>
  );
};
