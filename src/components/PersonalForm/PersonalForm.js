import React from 'react';
import './PersonalForm.css';
const PersonalForm = ({ firstName, lastName, email, onChangeForm, Title }) => {
  return (
    <div className="personal-form">
      <Title title={'Персональная информация'} />
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={onChangeForm}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={onChangeForm}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={onChangeForm}
        placeholder="Email"
      />
    </div>
  );
};

export default PersonalForm;
