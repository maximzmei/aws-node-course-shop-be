import * as yup from 'yup';

export const yupPostProductObject = yup.object().shape({
  title: yup.string().required().min(1),
  description: yup.string().required().min(1),
  price: yup.number().required().min(1),
  count: yup.number().required().min(1),
});
