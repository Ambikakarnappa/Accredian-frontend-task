import React from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ReferralFormModal = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
    },
    validationSchema: Yup.object({
      referrerName: Yup.string().required('Referrer name is required'),
      referrerEmail: Yup.string().email('Invalid email address').required('Referrer email is required'),
      refereeName: Yup.string().required('Referee name is required'),
      refereeEmail: Yup.string().email('Invalid email address').required('Referee email is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      onClose();
    },
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 2, backgroundColor: 'white', maxWidth: 400, margin: 'auto', marginTop: '10%' }}>
        <h2>Referral Form</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Referrer Name"
            name="referrerName"
            value={formik.values.referrerName}
            onChange={formik.handleChange}
            error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
            helperText={formik.touched.referrerName && formik.errors.referrerName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Referrer Email"
            name="referrerEmail"
            type="email"
            value={formik.values.referrerEmail}
            onChange={formik.handleChange}
            error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
            helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Referee Name"
            name="refereeName"
            value={formik.values.refereeName}
            onChange={formik.handleChange}
            error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
            helperText={formik.touched.refereeName && formik.errors.refereeName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Referee Email"
            name="refereeEmail"
            type="email"
            value={formik.values.refereeEmail}
            onChange={formik.handleChange}
            error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
            helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralFormModal;
