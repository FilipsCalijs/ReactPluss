import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(2, 'Минимум 2 символа для заполнения')
                    .required('Обязательное поле!'),
            email: Yup.string()
                    .email('Неправильный email адрес')
                    .required('Обязательное поле!'),
            amount: Yup.number()
                    .required('Сумма обязательна')
                    .min(5, 'Не менее 5'),
            currency: Yup.string().required('Выберите валюту'),
            text: Yup.string()
                    .min(10, 'Не менее 10 символов'),
            terms: Yup.boolean()
                    .required('Необходимо согласие')
                    .oneOf([true], "Необходимо согласие")
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    });

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div>: null}

            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div>: null}
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.amount}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div>{formik.errors.amount}</div>: null}
            
            
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                onChange={formik.handleChange}
                value={formik.values.currency}
                onBlur={formik.handleBlur}
            >
                <option value="">Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="RUB">RUB</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div>{formik.errors.currency}</div>: null}
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                onChange={formik.handleChange}
                value={formik.values.text}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div>{formik.errors.text}</div>: null}
            <label className="checkbox">
                <input 
                    name="terms" 
                    type="checkbox" 
                    onChange={formik.handleChange}
                    checked={formik.values.terms}
                    onBlur={formik.handleBlur}
                />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div>{formik.errors.terms}</div>: null}
            <button type="submit">Отправить</button>
        </form>
    );
}

export default Form;
