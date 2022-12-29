import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// talabalar
import Bakalavriat from "@/pages/talabalar/bakalavriat";
import BakalavriatId from "@/pages/talabalar/bakalavriat/_id";
import Magistratura from "@/pages/talabalar/magistratura";
import MagistraturaId from "@/pages/talabalar/magistratura/_id";
import Kechki from "@/pages/talabalar/kechki";
import KechkiId from "@/pages/talabalar/kechki/_id";
import Sirtqi from "@/pages/talabalar/sirtqi";
import SirtqiId from "@/pages/talabalar/sirtqi/_id";
import Bitiruvchilar from "@/pages/talabalar/bitiruvchilar";
import BitiruvchilarId from "@/pages/talabalar/bitiruvchilar/_id";
// abituriyentlar
import XorijiyFuqarolar from "@/pages/abituriyent/xorijiy_fuqarolar";
import XorijiyFuqarolarId from "@/pages/abituriyent/xorijiy_fuqarolar/_id";
import SirtqiKechkiId from "@/pages/abituriyent/sirtqi_kechki/_id";
import SirtqiKechki from "@/pages/abituriyent/sirtqi_kechki";
import QoshmaTalim from "@/pages/abituriyent/qo'shma_ta'lim";
import QoshmaTalimId from "@/pages/abituriyent/qo'shma_ta'lim/_id";
import MagistraturaAb from "@/pages/abituriyent/magistratura";
import MagistraturaAbId from "@/pages/abituriyent/magistratura/_id";
import BakalavriatAb from "@/pages/abituriyent/bakalavriat";
import BakalavriatAbId from "@/pages/abituriyent/bakalavriat/_id";
import UzBayrog from "./pages/UzBayrog";
import UzbGerb from "./pages/UzbGerb";
import UzbMadhiya from "./pages/UzbMadhiya";
import NewsId from "./pages/news/NewsId";
import NewsPage from "./pages/news/NewsPage";
import Events from "./pages/news/events/Events";
import EventsId from "./pages/news/events/EventsId";
import AnnouncementsPage from "./pages/news/announcementsPage/AnnouncementsPage";
import AnnouncementsPageId from "./pages/news/announcementsPage/AnnouncementsPageId";
import Sports from "./pages/news/sports/Sports";
import SportsId from "./pages/news/sports/SportsId";
// import Home from "@/pages/Home";
import SiteMap from "@/pages/site-map";
import Rektorat from "./pages/tuzilma/Rektorat";
import RektoratId from "./pages/tuzilma/RektoratId";
import M1 from "./pages/tuzilma/markazlar/M1";
import Fakultetlar from "./pages/tuzilma/fakultetlar/Fakultetlar";
import FakultetlarId from "./pages/tuzilma/fakultetlar/FakultetlarId";
import Fan from "@/pages/faoliyat/fan_va_innovatsiya/fan";
import Innovatsiya from "@/pages/faoliyat/fan_va_innovatsiya/innovatsiya";
import Doktorantura from "@/pages/faoliyat/fan_va_innovatsiya/doktorantura";
import MoliyaviyFaoliat from "@/pages/faoliyat/moliyaviy_faoliat";
import Yoshlar from "@/pages/faoliyat/yoshlar_bilan_ishlash";
import MadaniyMarifiy from "@/pages/faoliyat/madaniy_marifiy";
import XalqaroHamkorlik from "@/pages/faoliyat/xalqaro_aloqalar/xalqaro_hamkorlik";
import QoshmaDastur from "@/pages/faoliyat/xalqaro_aloqalar/xalqaro_hamkorlik/id";
import CreativeSpark from "@/pages/faoliyat/xalqaro_aloqalar/creative_spark";
import Ka107 from "@/pages/faoliyat/xalqaro_aloqalar/erasmus/ka107";
import MechaUz from "@/pages/faoliyat/xalqaro_aloqalar/erasmus/mecha_uz";
import SpaceCom from "@/pages/faoliyat/xalqaro_aloqalar/erasmus/space_com";
import Kafedralar from "./pages/tuzilma/kafedralar/Kafedralar";
import KafedralarId from "./pages/tuzilma/kafedralar/KafedralarId";
import { routes } from "./constants/page-routes";
import { QueryClient, QueryClientProvider } from "react-query";
// ilmiy-faoliyat
import Texnika from "@/pages/ilmiy_faoliyat/texnika";
import MahoratDarslar from "@/pages/ilmiy_faoliyat/mahorat-darslar";
import GumanitarFanlar from "@/pages/ilmiy_faoliyat/fanlar";
import YoshTexnika from "@/pages/ilmiy_faoliyat/yosh-texnika";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import M2 from "./pages/tuzilma/markazlar/M2";
import M3 from "./pages/tuzilma/markazlar/M3";
import M4 from "./pages/tuzilma/markazlar/M4";
import M5 from "./pages/tuzilma/markazlar/M5";
import B1 from "./pages/tuzilma/bolimlar/B1";
import B2 from "./pages/tuzilma/bolimlar/B2";
import B3 from "./pages/tuzilma/bolimlar/B3";
import B4 from "./pages/tuzilma/bolimlar/B4";
import B5 from "./pages/tuzilma/bolimlar/B5";
import B6 from "./pages/tuzilma/bolimlar/B6";
import B7 from "./pages/tuzilma/bolimlar/B7";
import B8 from "./pages/tuzilma/bolimlar/B8";
import B9 from "./pages/tuzilma/bolimlar/B9";
import B10 from "./pages/tuzilma/bolimlar/B10";
import B11 from "./pages/tuzilma/bolimlar/B11";
import B12 from "./pages/tuzilma/bolimlar/B12";
import F1 from "./pages/tuzilma/filiallar/F1";
import F2 from "./pages/tuzilma/filiallar/F2";
import F3 from "./pages/tuzilma/filiallar/F3";

// korrupsiyasiz soha
import TdtuShartnomalar from "./pages/korrupsiyasiz_soha/tdtu_shartnomalar";
import IshHaqiQoidalari from "./pages/korrupsiyasiz_soha/ish_haqi_qoidalari";
import MuassasaByudjeti from "./pages/korrupsiyasiz_soha/muassasa_byudjeti";
import FanDasturlari from "./pages/korrupsiyasiz_soha/fan_dasturlari";
import NamunaviyOraliq from "./pages/korrupsiyasiz_soha/namunaviy_oraliq";
import XodimlarProfili from "./pages/korrupsiyasiz_soha/xodimlar_profili";
import TalimYonalishlari from "./pages/korrupsiyasiz_soha/talim_yonalishlari";
import ProfessorOqituvchilar from "./pages/korrupsiyasiz_soha/professorlar";
import KorrupsiyagaOidHolatlar from "./pages/korrupsiyasiz_soha/korrupsiyaga_oid_holatlar";
import Search from "./pages/Search";
import Preparation from "./pages/Preparation";
import Qabul from "./pages/Qabul";
import Erasmus from "./pages/faoliyat/xalqaro_aloqalar/erasmus/erasmus";

const Home = lazy(() => import("@/pages/Home"));

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ToastContainer />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<span class="loader" />}>
              <Home />
            </Suspense>
          }
        />
        {/* davlat ramzlari */}
        <Route path={"/flag"} element={<UzBayrog />} />
        <Route path={"/qabul"} element={<Qabul />} />
        <Route path={"/search/:id"} element={<Search />} />
        <Route path={"/gerb"} element={<UzbGerb />} />
        <Route path={"/madhiya"} element={<UzbMadhiya />} />
        {/* news page */}
        <Route path={"new/news"}>
          <Route index element={<NewsPage />} />
          <Route path={":id"} element={<NewsId />} />
        </Route>
        <Route path={"new/events"}>
          <Route index element={<Events />} />
          <Route path={":id"} element={<EventsId />} />
        </Route>
        <Route path={"new/announcements"}>
          <Route index element={<AnnouncementsPage />} />
          <Route path={":id"} element={<AnnouncementsPageId />} />
        </Route>
        <Route path={"new/sport"}>
          <Route index element={<Sports />} />
          <Route path={":id"} element={<SportsId />} />
        </Route>
        {/* Tuzilma page */}
        <Route path={"structure/rectorate"}>
          <Route index element={<Rektorat />} />
          <Route path={":id"} element={<RektoratId />} />
        </Route>
        {/* markazlar */}
        <Route path={"/structure/centers/1"} element={<M1 />} />
        <Route path={"/structure/centers/2"} element={<M2 />} />
        <Route path={"/structure/centers/3"} element={<M3 />} />
        <Route path={"/structure/centers/4"} element={<M4 />} />
        <Route path={"/structure/centers/5"} element={<M5 />} />
        {/* markazlar */}
        {/* Bo’limlar */}
        <Route path={"/structure/sections/1"} element={<B1 />} />
        <Route path={"/structure/sections/2"} element={<B2 />} />
        <Route path={"/structure/sections/3"} element={<B3 />} />
        <Route path={"/structure/sections/4"} element={<B4 />} />
        <Route path={"/structure/sections/5"} element={<B5 />} />
        <Route path={"/structure/sections/6"} element={<B6 />} />
        <Route path={"/structure/sections/7"} element={<B7 />} />
        <Route path={"/structure/sections/8"} element={<B8 />} />
        <Route path={"/structure/sections/9"} element={<B9 />} />
        <Route path={"/structure/sections/10"} element={<B10 />} />
        <Route path={"/structure/sections/11"} element={<B11 />} />
        <Route path={"/structure/sections/12"} element={<B12 />} />
        {/* Bo’limlar */}
        {/* filiallar */}
        <Route path={"/structure/branches/1"} element={<F1 />} />
        <Route path={"/structure/branches/2"} element={<F2 />} />
        <Route path={"/structure/branches/3"} element={<F3 />} />
        {/* filiallar */}
        <Route path={"structure/faculties"}>
          <Route index element={<Fakultetlar />} />
          <Route path={":id"} element={<FakultetlarId />} />
        </Route>
        <Route path={"structure/kafedra"}>
          <Route index element={<Kafedralar />} />
          <Route path={":id"} element={<KafedralarId />} />
        </Route>
        {/* Students page */}
        <Route path={"/site-map"} element={<SiteMap />} />
        <Route path={"/preparation"} element={<Preparation />} />
        <Route path={"students/undergraduate"}>
          <Route index element={<Bakalavriat />} />
          <Route path={":id"} element={<BakalavriatId />} />
        </Route>
        <Route path={"students/judiciary"}>
          <Route index element={<Magistratura />} />
          <Route path={":id"} element={<MagistraturaId />} />
        </Route>
        <Route path={"students/evening"}>
          <Route index element={<Kechki />} />
          <Route path={":id"} element={<KechkiId />} />
        </Route>
        <Route path={"students/external"}>
          <Route index element={<Sirtqi />} />
          <Route path={":id"} element={<SirtqiId />} />
        </Route>
        <Route path={"students/graduates"}>
          <Route index element={<Bitiruvchilar />} />
          <Route path={":id"} element={<BitiruvchilarId />} />
        </Route>
        {/* Activity page */}
        <Route path={"activity/science"}>
          <Route index element={<Fan />} />
        </Route>
        <Route path={"activity/innovation"}>
          <Route index element={<Innovatsiya />} />
        </Route>
        <Route path={"activity/doctoral-studies"}>
          <Route index element={<Doktorantura />} />
        </Route>
        <Route path={"activity/financial-activity"}>
          <Route index element={<MoliyaviyFaoliat />} />
        </Route>
        <Route path={"activity/youth-work"}>
          <Route index element={<Yoshlar />} />
        </Route>
        <Route path={"activity/cultural-education"}>
          <Route index element={<MadaniyMarifiy />} />
        </Route>
        <Route path={"activity/international-cooperation"}>
          <Route index element={<XalqaroHamkorlik />} />
          <Route path={":id"} element={<QoshmaDastur />} />
        </Route>
        <Route path={"activity/creative-spark"}>
          <Route index element={<CreativeSpark />} />
        </Route>
        <Route path={"activity/erasmus/erasmus"}>
          <Route index element={<Erasmus />} />
        </Route>
        <Route path={"activity/erasmus"}>
          <Route index element={<Ka107 />} />
        </Route>
        <Route path={"activity/erasmus/ka107"}>
          <Route index element={<Ka107 />} />
        </Route>
        <Route path={"activity/erasmus/mecha-uz"}>
          <Route index element={<MechaUz />} />
        </Route>
        <Route path={"activity/space-com"}>
          <Route index element={<SpaceCom />} />
        </Route>
        {/* Scientific-activity page */}
        <Route path={"scientific/techniq"}>
          <Route index element={<Texnika />} />
        </Route>
        <Route path={"scientific/young-techniq"}>
          <Route index element={<YoshTexnika />} />
        </Route>
        <Route path={"scientific/humanities"}>
          <Route index element={<GumanitarFanlar />} />
        </Route>
        <Route path={"scientific/master"}>
          <Route index element={<MahoratDarslar />} />
        </Route>
        {/* Abituriyent page */}
        <Route path={"abiturient/undergraduate"}>
          <Route index element={<BakalavriatAb />} />
          <Route path={":id"} element={<BakalavriatAbId />} />
        </Route>
        <Route path={"abiturient/judiciary"}>
          <Route index element={<MagistraturaAb />} />
          <Route path={":id"} element={<MagistraturaAbId />} />
        </Route>
        <Route path={"abiturient/external-evening"}>
          <Route index element={<SirtqiKechki />} />
          <Route path={":id"} element={<SirtqiKechkiId />} />
        </Route>
        <Route path={"abiturient/mixed-education"}>
          <Route index element={<QoshmaTalim />} />
          <Route path={":id"} element={<QoshmaTalimId />} />
        </Route>
        <Route path={"abiturient/foreign-citizens"}>
          <Route index element={<XorijiyFuqarolar />} />
          <Route path={":id"} element={<XorijiyFuqarolarId />} />
        </Route>
        {/* Korrupsiyasiz soha page */}
        <Route path={"/corruption/1"} element={<TdtuShartnomalar />} />
        <Route path={"/corruption/2"} element={<XodimlarProfili />} />
        <Route path={"/corruption/3"} element={<IshHaqiQoidalari />} />
        <Route path={"/corruption/4"} element={<TalimYonalishlari />} />
        <Route path={"/corruption/5"} element={<MuassasaByudjeti />} />
        <Route path={"/corruption/6"} element={<ProfessorOqituvchilar />} />
        <Route path={"/corruption/7"} element={<FanDasturlari />} />
        <Route path={"/corruption/8"} element={<KorrupsiyagaOidHolatlar />} />
        <Route path={"/corruption/9"} element={<NamunaviyOraliq />} />
        {/*  University */}
        {routes.map(({ path, element }) => {
          return <Route path={path} element={element} key={path} />;
        })}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
