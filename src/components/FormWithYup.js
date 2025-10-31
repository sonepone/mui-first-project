import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const minimalnaDuzinaPolja = 3;
const schema = yup.object({
/*************  ✨ Windsurf Command 🌟  *************/

//   name: yup.string().required().min(
//       (value, { min }) => `Ne smije biti krace od ${min} karaktera`, { min: 3 }
//     )
//       .max(10, 'Maksimum 10 karaktera dozvoljeno'),
 name: yup.string().required().min(minimalnaDuzinaPolja, `Ne smije biti krace od ${minimalnaDuzinaPolja} karaktera`).max(10, 'Maksimum 10 karaktera dozvoljeno'),
/*******  4d6073f6-b72c-4a41-ba53-95eba4204878  *******/    
  email: yup.string().email().required(),
});

export default function FormWithYup() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    // <form onSubmit={handleSubmit(console.log)}>
    //   <Controller
    //     name="name"
    //     control={control}
    //     render={({ field, fieldState }) => (
    //       <TextField {...field} 
    //          label="Name" 
    //          error={!!fieldState.error}
    //          helperText={fieldState.error?.message} />
    //     )}
    //   />
    //   <Controller
    //     name="email"
    //     control={control}
    //     render={({ field, fieldState }) => (
    //       <TextField {...field}
    //          label="Email"
    //          error={!!fieldState.error}
    //          helperText={fieldState.error?.message} />
    //     )}
    //   />
    //   <Button type="submit">Submit</Button>
    // </form>

    <Box
      component="form"
      onSubmit={handleSubmit(console.log)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: 'auto', marginTop: 5 }}
    >

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
      {/* <Button type="submit">Submit</Button> */}
      <Button type="submit" variant="contained">Submit</Button>

    </Box>



  );
}
