import s from './Main.module.css';
import {useTranslation} from "react-i18next";
import plangs from './Data/plangs.json';
import libs from './Data/libs.json';
import engines from './Data/engines.json';
import tools from './Data/tools.json';

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
                    <h3>{t("languages")}</h3>
                    <ul className={s.plangs}>
                        {plangs.map(el => (
                            <li style={{backgroundColor: el.color}}><img src={el.icon} alt={el.name}/>{el.name}</li>
                        ))}
                    </ul>
                    <h3>{t("libs")}</h3>
                    <ul className={s.plangs}>
                        {libs.map(el => (
                            <li style={{backgroundColor: el.color}}><img src={el.icon} alt={el.name}/>{el.name}</li>
                        ))}
                    </ul>
                    <h3>{t("engines")}</h3>
                    <ul className={s.plangs}>
                        {engines.map(el => (
                            <li style={{backgroundColor: el.color}}><img src={el.icon} alt={el.name}/>{el.name}</li>
                        ))}
                    </ul>
                    <h3>{t("tools")}</h3>
                    <ul className={s.plangs}>
                        {tools.map(el => (
                            <li style={{backgroundColor: el.color}}><img src={el.icon} alt={el.name}/>{el.name}</li>
                        ))}
                    </ul>
                </section>
            </div>
            <div className={s.rightPart}>


            </div>
        </main>
    )
}

export default Main;