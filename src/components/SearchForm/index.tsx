import React from "react";
import { Button, Form } from "antd";
import { FormProps, useForm } from "antd/lib/form/Form";
import styles from "./index.module.scss";
import { Store } from "antd/lib/form/interface";

interface SearchFormProps extends FormProps {
  onFinish: (values: Store) => void;
}

function SearchForm({ onFinish, children, ...rest }: SearchFormProps) {
  const [form] = useForm();

  const handleSubmit = (values: Store) => {
    onFinish(values);
  };

  const handleReset = () => {
    form.resetFields();
    onFinish(rest.initialValues || {});
  };

  return (
    <Form
      layout="inline"
      form={form}
      onFinish={handleSubmit}
      onReset={handleReset}
      className={styles.searchForm}
      {...rest}>
      {children}
      <Form.Item>
        <Button htmlType="submit">搜索</Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="reset">重置</Button>
      </Form.Item>
    </Form>
  );
}

export default SearchForm;
