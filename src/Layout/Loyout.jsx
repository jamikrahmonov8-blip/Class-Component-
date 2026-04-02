import React from "react";
import { Outlet, Link } from "react-router"; 
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { Button } from "antd";
import menu from "../assets/menu'.png";
function Layout() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div 
  className="flex gap-[20px] items-center p-2 bg-gray-100 max-w-[1440px] mx-auto" 
  style={{
    boxShadow: "0px 4px 8px 0px #26323814, 0px 2px 4px 0px #26323814"
  }}
>
        <div className="flex gap-[20px] items-center">
          <img src={menu} alt="" className="block sm:hidden" />
        <img src={logo} alt="Logo" className="w-10" /><h1 className="font-bold text-[48px]">Grid</h1>
                  </div>
        
        <nav className="flex gap-[15px] hidden sm:block">
          <Link to="/">{t("Home")}</Link>
          <Link to="/about">{t("About")}</Link>
        </nav>

        <div className="ml-auto"><Button variant="solid" color="purple">Sign In</Button></div>

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