import {
  Avatar, Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import CareerPerson from './career-person';
/* eslint-disable comma-dangle */
const Career = () => {
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);

  const useStyles = makeStyles(() => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      padding: '1rem',
      margin: '1rem',
    },
    paper2: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation3.backgroundColor,
      padding: '1rem',
      margin: '1rem',
    },
    typo: {
      fontSize: '1.7rem',
    },
    moreInfo: {
      maxWidth: '450px'
    },
    lineHeight: {
      lineHeight: '90%'
    }
  }));
  const {
    paper, paper2, typo, moreInfo, lineHeight
  } = useStyles();

  const [isMoreInfoChecked, setIsMoreInfoChecked] = React.useState(false);

  const handleChange = () => {
    setIsMoreInfoChecked((prevState) => !prevState);
  };
  return (
    <Element name={NAVIGATION.career}>
      <Paper className={paper}>
        <Typography paragraph>W zawiązku z dynamicznym rozwojem firmy poszukujemy:</Typography>

        <CareerPerson>
          <Typography className={typo}>
            KSIĘGOWA
          </Typography>
        </CareerPerson>
        <CareerPerson>
          <Typography className={typo}>
            SPECJALISTA DS. KADR I PŁAC
          </Typography>
        </CareerPerson>
        <CareerPerson>
          <Typography className={`${typo} ${lineHeight}`}>
            PRZEDSTAWICIEL HANDLOWY /
            <br />
            ACCOUNT MANAGER
          </Typography>
        </CareerPerson>
        <CareerPerson>
          <Typography className={typo}>
            STUDENT
          </Typography>
          <Typography className={lineHeight}>

            (PRAKTYKI Z MOŻLIWOŚCIĄ PÓŹNIEJSZEGO ZATRUDNIENIA)
            <br />
            <br />
            - STAŻ W DZIALE KSIĘGOWOŚCI
            <br />
            - STAŻ W DZIALE OBSŁUGI KLIENTA
            <br />
            - STAŻ W DZIALE SPRZEDAŻY I MARKETINGU

          </Typography>
        </CareerPerson>
        <FormGroup row>
          <FormControlLabel
            control={<Switch checked={isMoreInfoChecked} onChange={handleChange} />}
            label="Więcej informacji"
          />
        </FormGroup>
        {isMoreInfoChecked
        && (
        <Paper className={paper2}>
          <Typography paragraph className={moreInfo}>
            Oferty (list motywacyjny i CV) można przesłać drogą mailową na adres: info@vavicom.pl
          </Typography>
          <Typography paragraph className={moreInfo}>
            Zgodnie z art. 13 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE VAVICOM Sp. z o.o. informuje:
          </Typography>
          <Typography paragraph className={moreInfo}>
            – administratorem Pani/Pana danych osobowych jest VAVICOM Sp. z o.o. z siedzibą przy ul. Grochowskiego 7 lok. 25, 05-500 Piaseczno, e-mail: info@vavicom.pl, tel.: 884 267 820.
          </Typography>
          <Typography paragraph className={moreInfo}>
            – Pani/Pana dane osobowe przetwarzane będą na potrzeby aktualnej i przyszłych rekrutacji – na podstawie art. 6 ust. 1 lit. a, art. 9 ust.2 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE oraz na podstawie ustawy z dnia 26 czerwca 1974 roku Kodeks pracy,
          </Typography>
          <Typography paragraph className={moreInfo}>
            – odbiorcami Pani/Pana danych osobowych będą wyłącznie podmioty uprawnione do uzyskania danych osobowych na podstawie przepisów prawa,
          </Typography>
          <Typography paragraph className={moreInfo}>
            – Pani/Pana dane osobowe przechowywane będą w czasie określonym przepisami prawa,
          </Typography>
          <Typography paragraph className={moreInfo}>
            – posiada Pani/Pan prawo żądania od administratora dostępu do danych osobowych, prawo do ich sprostowania, usunięcia lub ograniczenia przetwarzania, prawo do wniesienia sprzeciwu wobec przetwarzania, prawo do przenoszenia danych, prawo do cofnięcia zgody w dowolnym momencie,
          </Typography>
          <Typography paragraph className={moreInfo}>
            – ma Pani/Pan prawo wniesienia skargi do organu nadzorczego na działania administratora w zakresie ochrony danych osobowych,
          </Typography>
          <Typography paragraph className={moreInfo}>
            – podanie danych osobowych jest obligatoryjne w oparciu o przepisy prawa, a w pozostałym zakresie jest dobrowolne, jednak podanie danych osobowych jest warunkiem przystąpienia do rekrutacji.
          </Typography>

        </Paper>
        )}
      </Paper>

    </Element>
  );
};

export default Career;
