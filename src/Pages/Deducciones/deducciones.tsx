import { useState } from "react";
import { Card, CardContent, TextField, IconButton } from "@mui/material";
import { PlusCircle, Trash } from "lucide-react";

interface Deduccion {
  nombre: string;
  monto: string;
}

export default function Deducciones() {
  const [deducciones, setDeducciones] = useState<Deduccion[]>([]);
  const [nuevaDeduccion, setNuevaDeduccion] = useState<Deduccion>({ nombre: "", monto: "" });

  const agregarDeduccion = () => {
    if (nuevaDeduccion.nombre && nuevaDeduccion.monto) {
      setDeducciones([...deducciones, nuevaDeduccion]);
      setNuevaDeduccion({ nombre: "", monto: "" });
    }
  };

  const eliminarDeduccion = (index: number) => {
    setDeducciones(deducciones.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Añadir Deducciones</h2>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <TextField
          label="Nombre de la deducción"
          variant="outlined"
          value={nuevaDeduccion.nombre}
          onChange={(e) => setNuevaDeduccion({ ...nuevaDeduccion, nombre: e.target.value })}
          fullWidth
        />
        <TextField
          label="Monto"
          variant="outlined"
          type="number"
          value={nuevaDeduccion.monto}
          onChange={(e) => setNuevaDeduccion({ ...nuevaDeduccion, monto: e.target.value })}
          fullWidth
        />
        <IconButton onClick={agregarDeduccion} color="secondary">
          <PlusCircle size={40} />
        </IconButton>
      </div>
      <div>
        {deducciones.map((deduccion, index) => (
          <Card key={index} style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
            <CardContent>
              <p style={{ fontWeight: '600' }}>{deduccion.nombre}</p>
              <p>€ {deduccion.monto}</p>
            </CardContent>
            <IconButton onClick={() => eliminarDeduccion(index)} color="error">
              <Trash size={40} />
            </IconButton>
          </Card>
        ))}
      </div>
    </div>
  );
}
