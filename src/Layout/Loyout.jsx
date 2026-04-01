import React from "react";
import { Outlet, Link } from "react-router"; 
import { useTranslation } from "react-i18next";

function Layout() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="flex gap-[20px] items-center p-4 bg-gray-100">
        <img src="/logo.png" alt="Logo" className="w-10" />
        
        <nav className="flex gap-[15px]">
          <Link to="/">{t("Home")}</Link>
          <Link to="/about">{t("About")}</Link>
        </nav>

        <div className="ml-auto">{t("welcome")}</div>

        <div className="flex gap-[10px]">
          <button 
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? "font-bold text-blue-600" : ""}
          >
            EN
            </button>
            <button 
            onClick={() => changeLanguage('ru')}
            className={i18n.language === 'ru' ? "font-bold text-blue-600" : ""}
          >
            RU
          </button>
        </div>
      </div>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;