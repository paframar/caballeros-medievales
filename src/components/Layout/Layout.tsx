import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className="layout">
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
};
