import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

export default function FormWithYup() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <TextField {...field} 
             label="Name" 
             error={!!fieldState.error}
             helperText={fieldState.error?.message} />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField {...field}
             label="Email"
             error={!!fieldState.error}
             helperText={fieldState.error?.message} />
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
