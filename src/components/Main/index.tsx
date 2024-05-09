import s from './Main.module.css';
import { useTranslation } from "react-i18next";
import plangs from './Data/plangs.json';
import libs from './Data/libs.json';
import engines from './Data/engines.json';
import tools from './Data/tools.json';
import Exp from "./Exp";

const Main = () => {
    const {t} = useTranslation();
    return (
        <main>
            <div className={s.leftPart}>
                <section className={s.profile}>
                    <img src="https://avatars.githubusercontent.com/u/90260450?v=4" alt="profile picture"/>
                    <h1>NeckitWin</h1>
                    <p>{t("name")}</p>
                    <p>{t("description")}</p>
                </section>
                <section className={s.exp}>
                    <Exp title="plangs" data={plangs}/>
                    <Exp title="libs" data={libs}/>
                    <Exp title="engines" data={engines}/>
                    <Exp title="tools" data={tools}/>
                </section>
            </div>
            <div className={s.rightPart}>


            </div>
        </main>
    )
}

export default Main;