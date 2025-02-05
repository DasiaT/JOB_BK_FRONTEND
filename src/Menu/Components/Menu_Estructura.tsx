import { IMenu } from '../Interface/Imenu';
import EuroIcon from '@mui/icons-material/Euro';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { HandCoins } from 'lucide-react';
import Contrato from '../../Pages/Contrato/Contrato';
import MultipleDateTimeRangePicker from '../Interface/pruebas';

export const pages_settings: IMenu[] = [
  { label: 'Configuracion de Contrato', icon: <RequestPageOutlinedIcon />, path: '/contract', content: <Contrato/> },
  { label: 'Pago Mes Actual', icon: <EuroIcon />, path: '/pago', content: '' },
  { label: 'Ingreso de Horas', icon: <CalendarMonthOutlinedIcon />, path: '/ingreso', content: <MultipleDateTimeRangePicker/> },
  { label: 'Deducciones', icon: <HandCoins />, path: '/deducciones', content: '' },
];