import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
    ErrorMessageStyled,
    FieldWrapper,
    FormStyled,
    Label,
    ButtonSubmit
} from './Form.styled';

import { useSelector } from 'react-redux';

const contactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .length(9, 'Number must have 9 symbols')
        .trim()
        .matches(
            /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            'Number must be in the format 111-11-11'
        )
        .required('Required'),
});

const Form = ({ onSubmit }) => {
    const contacts = useSelector(state => state.contacts.contactList);

    return (
        <>
            <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={contactSchema}
            onSubmit={(values, { resetForm }) => {
                const { name, number } = values;

                if (contacts.some(contact => contact.name === name)) {
                  alert(`Contact with name "${name}" already exists!`);
                } else if (contacts.some(contact => contact.number === number)) {
                  alert(`Contact with number "${number}" already exists!`);
                } else {
                  onSubmit(values);
                  resetForm();
                }
            }}
            >
            {() => (
                <FormStyled>
                <FieldWrapper>
                    <Label htmlFor="name">Name</Label>
                    <Field id="name" name="name" placeholder="Jane" />
                    <ErrorMessageStyled component="div" name="name" />
                </FieldWrapper>

                <FieldWrapper>
                    <Label htmlFor="number">Number</Label>
                    <Field id="number" name="number" placeholder="123-45-67" />
                    <ErrorMessageStyled component="div" name="number" />
                </FieldWrapper>

                <ButtonSubmit type="submit">Add contact</ButtonSubmit>
                </FormStyled>
            )}
            </Formik>
        </>
    );
};

export default React.memo(Form);