import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
// Componente Item reutilizable
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

// Valores predeterminados
const DEFAULT_VALUES = {
  contratoHoras: 20,
  pagoHora: 6,
  pagoHoraExtra: 0,
  diaCierre: '7',
};

export default function Contrato() {
  const [day, setDay] = useState(DEFAULT_VALUES.diaCierre);
  const [contratoHoras, setContratoHoras] = useState(DEFAULT_VALUES.contratoHoras);
  const [pagoHora, setPagoHora] = useState(DEFAULT_VALUES.pagoHora);
  const [pagoHoraExtra, setPagoHoraExtra] = useState(DEFAULT_VALUES.pagoHoraExtra);

  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };

  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '100%' },
    maxWidth: '400px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    minHeight: '100vh',
    padding: 2,
  }}
  noValidate
  autoComplete="off"
>
      <Stack spacing={2}>
        <Typography variant="h4" color="text.secondary">Configuración de Contrato</Typography>
        <Item>
          <TextField
            id="contrato"
            label="Contrato en Horas"
            variant="outlined"
            type="number"
            value={contratoHoras}
            onChange={(e) => setContratoHoras(Number(e.target.value))}
            fullWidth
          />
        </Item>
        <Item>
          <TextField
            id="pago_hora"
            label="Pago por Hora"
            variant="outlined"
            type="number"
            value={pagoHora}
            onChange={(e) => setPagoHora(Number(e.target.value))}
            fullWidth
          />
        </Item>
        <Item>
          <TextField
            id="pago_hora_extra"
            label="Pago por Hora Extra"
            variant="outlined"
            type="number"
            value={pagoHoraExtra}
            onChange={(e) => setPagoHoraExtra(Number(e.target.value))}
            fullWidth
          />
        </Item>
        <Item>
          <FormControl fullWidth>
            <InputLabel id="dia-cierre-label">Día de Cierre</InputLabel>
            <Select
              labelId="dia-cierre-label"
              id="dia-cierre"
              value={day}
              label="Día de Cierre"
              onChange={handleChange}
            >
              <MenuItem value={1}>Lunes</MenuItem>
              <MenuItem value={2}>Martes</MenuItem>
              <MenuItem value={3}>Miércoles</MenuItem>
              <MenuItem value={4}>Jueves</MenuItem>
              <MenuItem value={5}>Viernes</MenuItem>
              <MenuItem value={6}>Sábado</MenuItem>
              <MenuItem value={7}>Domingo</MenuItem>
            </Select>
          </FormControl>
        </Item>
        <Item>
          <TextField
            id="fecha_corte"
            label="Fecha de Corte"
            variant="outlined"
            type="date"
            fullWidth
            defaultValue={(() => {
              const today = new Date();
              const year = today.getFullYear();
              const month = String(today.getMonth() + 1).padStart(2, '0'); // Asegura que el mes tenga dos dígitos
              return `${year}-${month}-21`; // Siempre establece el día 21
            })()}
          />
        </Item>
        <Item >
          <Button
            onClick={handleClick}
            endIcon={<SaveIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            fullWidth 
            color='secondary'
            sx={{ width: "100%", display: "flex" }}
          >
            Guardar
          </Button>
        </Item>
        <Item >
          <Button
            onClick={handleClick}
            startIcon={<KeyboardReturnIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            fullWidth 
            color='error'
            sx={{ width: "100%", display: "flex" }}
          >
            Retornar a Menu
          </Button>
        </Item>
      </Stack>
    </Box>
  );
}