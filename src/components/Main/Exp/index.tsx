import s from './Exp.module.css';
import {useTranslation} from 'react-i18next';

interface Exp {
    title: string;
    data: Array<{
        name: string,
        icon: string,
        color: string
    }>;
}

const Exp = (props: Exp) => {
    const {t} = useTranslation();
    return (
        <>
            <h3 className={s.exp_title}>{t(props.title)}</h3>
            <ul className={s.plangs}>
                {(props.data).map((el, index) => (
                    <li key={index} style={{backgroundColor: el.color}}><img src={el.icon} alt={el.name}/>{el.name}</li>
                ))}
            </ul>
        </>
    );
}

export default Exp;