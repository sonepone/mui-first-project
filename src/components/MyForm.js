import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function MyForm() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      age: '',
    },
    // errors: {email  : 'Invalid email address', name: 'Name is required', age: 'You must be at least 18' },
    // disabled: true
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // e.g. send data to backend here
    reset(); // optional: reset form after submit
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: 'auto', marginTop: 8 }}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required', validate: value => 
          { console.log("Radim validaciju: " + value);
             return  value.trim() !== '' || 'Name cannot be empty'
        }
        }}
        
        render={({ field, fieldState, formState }) => {
            console.log(formState);
          return (
          <TextField
            {...field}
            label="Name"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />);
        }
        }
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: 'Invalid email address',
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="age"
        control={control}
        rules={{
          required: 'Age is required',
          min: { value: 18, message: 'You must be at least 18' },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Age"
            type="number"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <Button type="submit" variant="contained">Submit</Button>
      <Button type="button" variant="contained" onClick={reset}>Reset</Button>
    </Box>
  );
}
