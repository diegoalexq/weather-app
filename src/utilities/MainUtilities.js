import moment from 'moment';
import 'moment/locale/es';

/**
 * Funciones para redondear la temperatura y formatear la fecha unix a Date
 */

export const MainTemp = (temp) => {
  return Math.ceil(temp) +`°C`
}

export const FormatTime = (unix) => {
  moment.locale('es');
  return  moment.unix(unix).format("LLLL");
}