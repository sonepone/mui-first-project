import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Typography,
  Autocomplete,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';

function UpdatePatientForm() {
  const { id } = useParams(); // e.g. /updatePatient/722
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      sex: '',
      dateOfBirth: '',
      insured: false,
      maritalStatus: '',
      address: '',
      city: '',
      country: '',
    },
  });

  // 🔹 Fetch patient data
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(`http://myserver.com:8080/medical/api/patient/${id}`);
        const data = res.data;

        // Adjust values if backend uses "Y"/"N" for booleans
        data.insured = data.insured === 'Y';

        reset(data); // populate form
      } catch (err) {
        console.error('Error fetching patient', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id, reset]);

  // 🔹 Fetch lists for City & Country (could be backend endpoints)
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const [cityRes, countryRes] = await Promise.all([
          axios.get('http://myserver.com:8080/medical/api/cities'),
          axios.get('http://myserver.com:8080/medical/api/countries'),
        ]);
        setCities(cityRes.data);
        setCountries(countryRes.data);
      } catch (err) {
        console.error('Error fetching lists', err);
      }
    };
    fetchLists();
  }, []);

  const onSubmit = async (formData) => {
    const payload = {
      ...formData,
      insured: formData.insured ? 'Y' : 'N', // convert back for backend
    };

    try {
      await axios.put(`http://myserver.com:8080/medical/api/patient/${id}`, payload);
      alert('Patient updated successfully!');
    } catch (err) {
      console.error('Error updating patient', err);
      alert('Failed to update patient.');
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 400,
        margin: 'auto',
        marginTop: 5,
      }}
    >
      <Typography variant="h6">Update Patient #{id}</Typography>

      {/* First Name */}
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <TextField {...field} label="First Name" fullWidth />}
      />

      {/* Last Name */}
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => <TextField {...field} label="Last Name" fullWidth />}
      />

      {/* Sex */}
      <Controller
        name="sex"
        control={control}
        render={({ field }) => (
          <FormControl>
            <RadioGroup {...field} row>
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
              <FormControlLabel value="O" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        )}
      />

      {/* Date of Birth */}
      <Controller
        name="dateOfBirth"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        )}
      />

      {/* Insured */}
      <Controller
        name="insured"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Insured"
          />
        )}
      />

      {/* Marital Status */}
      <Controller
        name="maritalStatus"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>Marital Status</InputLabel>
            <Select {...field} label="Marital Status">
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Divorced">Divorced</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      {/* Address */}
      <Controller
        name="address"
        control={control}
        render={({ field }) => <TextField {...field} label="Address" fullWidth />}
      />

      {/* City */}
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={cities.map((c) => c.name)}
            freeSolo
            onInputChange={(_, value) => field.onChange(value)}
            renderInput={(params) => <TextField {...params} label="City" fullWidth />}
          />
        )}
      />

      {/* Country */}
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={countries.map((c) => c.name)}
            freeSolo
            onInputChange={(_, value) => field.onChange(value)}
            renderInput={(params) => <TextField {...params} label="Country" fullWidth />}
          />
        )}
      />

      <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
        Save Changes
      </Button>
    </Box>
  );
}

export default UpdatePatientForm;