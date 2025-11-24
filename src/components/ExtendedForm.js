import { Controller, useForm } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox, Button, Box } from '@mui/material';

export default function ExtendedForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      country: '',
      subscribed: false,
    },
  });

  const onSubmit = (data) => console.log(data);



       const countries = [
        { country: "Afghanistan", countryValue: "AF" },
        { country: "Albania", countryValue: "AL" },
        { country: "Algeria", countryValue: "DZ" },
        { country: "Andorra", countryValue: "AD" },
        { country: "Angola", countryValue: "AO" },
        { country: "Antigua and Barbuda", countryValue: "AG" },
        { country: "Argentina", countryValue: "AR" },
        { country: "Armenia", countryValue: "AM" },
        { country: "Australia", countryValue: "AU" },
        { country: "Austria", countryValue: "AT" },
        { country: "Azerbaijan", countryValue: "AZ" },
        { country: "Bahamas", countryValue: "BS" },
        { country: "Bahrain", countryValue: "BH" },
        { country: "Bangladesh", countryValue: "BD" },
        { country: "Barbados", countryValue: "BB" },
        { country: "Belarus", countryValue: "BY" },
        { country: "Belgium", countryValue: "BE" },
        { country: "Belize", countryValue: "BZ" },
        { country: "Benin", countryValue: "BJ" },
        { country: "Bhutan", countryValue: "BT" },
        { country: "Bolivia", countryValue: "BO" },
        { country: "Bosnia and Herzegovina", countryValue: "BA" },
      ];

  const countrMenuItemsArray = countries.map((country) => <MenuItem key={country.countryValue} value={country.countryValue}>{country.country}</MenuItem>);


  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: 'auto', marginTop: 5 }}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: "Ime je obavezno polje!!!", validate: (staSiMiProslijedio) => {console.log(staSiMiProslijedio); return true;} }}

        render={({ field, fieldState }) => (
            <>
                <TextField {...field} label="Name"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    />
                {fieldState.error && <div style={{color: 'red'}}>{fieldState.error?.message}</div>}
            </>
        )}
        >
      </Controller>

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <FormControl>
            <InputLabel>Country</InputLabel>
            <Select {...field} label="Country">
                {countrMenuItemsArray}

              {/* <MenuItem value="US">United States</MenuItem>
              <MenuItem value="DE">Germany</MenuItem>
              <MenuItem value="BA">Bosnia & Herzegovina</MenuItem> */}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="subscribed"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Subscribe to newsletter"
          />
        )}
      />

      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  );
}
