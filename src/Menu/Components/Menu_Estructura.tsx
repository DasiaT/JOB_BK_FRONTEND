import { IMenu } from '../Interface/Imenu';
//import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import EuroIcon from '@mui/icons-material/Euro';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { HandCoins } from 'lucide-react';

export const pages_settings: IMenu[] = [
  
  { label: 'Configuracion de Contrato', icon: <RequestPageOutlinedIcon />, path: '/empleados', content: '' },
  { label: 'Pago Mes Actual', icon: <EuroIcon />, path: '/Workstation', content: '' },
  { label: 'Ingreso de Horas', icon: <CalendarMonthOutlinedIcon />, path: '/Ingreso', content: '' },
  { label: 'Deducciones', icon: <HandCoins />, path: '/Deducciones', content: '' },
  
];