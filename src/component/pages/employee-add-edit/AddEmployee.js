import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Radio, Button } from "antd";
import {
  Prompt
} from "react-router-dom";

import { isValidTextLength, isValidTextByRegex } from "../../../shared/utils/utils";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 14,
      offset: 6
    }
  }
};

// integrate component of antd with redux-form
const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      {...formItemLayout}
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);
const ARadioGroup = makeField(RadioGroup);

let AddEmployee = props => {
  const {
    handleSubmit,
    invalid,
    pristine,
    submitting,
    itemEmployee,
    initialize
  } = props;
  const [isFormMakeChanged, setFormMakeChange] = useState(false);

  // load initial data for edit page.
  useEffect(() => {
    initialize(itemEmployee)
  }, [itemEmployee]);

  const handleOnchage = () => {
    setFormMakeChange(true);
  }

  return (
    <form className="form-add-employee" onSubmit={handleSubmit} onChange={handleOnchage}>
      <Prompt
        when={isFormMakeChanged}
        message={'Form has been modified. You will loose your unsaved changes. Are you sure you want to close this form?'}
      />
      <Field label="First Name" name="first_name" component={AInput} placeholder="First Name" hasFeedback />

      <Field label="Last Name" name="last_name" component={AInput} placeholder="Last Name" hasFeedback />

      <Field label="Email" name="email_address" component={AInput} type="email" placeholder="Email" hasFeedback />

      <Field
        name="phone_number"
        label="Phone number"
        component={AInput}
        placeholder="Phone Number"
      />

      <Field label="Gender" name="gender" component={ARadioGroup} value="male">
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
      </Field>

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" disabled={invalid || pristine || submitting} htmlType="submit" className="btn-submit" onClick={() => {
          setFormMakeChange(false)
        }}>
          Submit
        </Button>
      </FormItem>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (values?.first_name && !isValidTextLength(values?.first_name)) {
    errors.first_name = "Minimum 6 characters and max 10 characters validatation";
  }

  if (values?.last_name && !isValidTextLength(values?.last_name)) {
    errors.last_name = "Minimum 6 characters and max 10 characters validatation";
  }

  if (values?.email_address && !isValidTextByRegex(values?.email_address, /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    errors.email_address = "Email is unvalidated";
  }

  if (values?.phone_number && !isValidTextByRegex(values?.phone_number, /^(?:\+65)?[689][0-9]{7}$/)) {
    errors.phone_number = "Phone is unvalidated";
  }
  return errors;
};

export default reduxForm({
  form: 'employee-form',
  validate
})(AddEmployee);