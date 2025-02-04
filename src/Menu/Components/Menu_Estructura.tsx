import { IMenu } from '../Interface/Imenu';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const pages_settings: IMenu[] = [
  { label: 'Horario', icon: <AccessTimeIcon />, path: '/Workstation', content: '' },
  { label: 'Info', icon: <PersonAddAltTwoToneIcon />, path: '/empleados', content: '' }
];