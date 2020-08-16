import React from "react";
import { Form, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const JobForm = (props) => {
  return (
    <React.Fragment>
      <Formik
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          title: Yup.string(),
          description: Yup.string(),
          summary: Yup.string(),
          pay: Yup.string(),
          slug: Yup.string(),
          statusId: Yup.string(),
          techCommpanyId: Yup.number(),
          skills: Yup.string(),
        })}
        initialValues={props.formData}
        onSubmit={props.onSubmit}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleSubmit,
            isValid,
            isSubmitting,
          } = props;
          return (
            <Form onSubmit={handleSubmit} className={"col-md-6 pt-4"}>
              <FormGroup>
                <Label>Title</Label>
                <Field
                  name="title"
                  type="text"
                  values={values.title}
                  placeholder="title"
                  autoComplete="off"
                  className={
                    errors.title && touched.title
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.title && touched.title && (
                  <span className="input-feedback">{errors.title}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Field
                  name="description"
                  type="text"
                  values={values.description}
                  placeholder="description"
                  autoComplete="off"
                  className={
                    errors.description && touched.description
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.description && touched.description && (
                  <span className="input-feedback">{errors.description}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Summary</Label>
                <Field
                  name="summary"
                  type="text"
                  values={values.summary}
                  placeholer="summary"
                  autoComplete="off"
                  className={
                    errors.summary && touched.summary
                      ? "form-control error"
                      : "form-control"
                  }
                ></Field>
                {errors.summary && touched.summary && (
                  <span className="input-feedback">{errors.summary}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Pay</Label>
                <Field
                  name="pay"
                  type="text"
                  values={values.pay}
                  placeholder="pay"
                  autoComplete="off"
                  className={
                    errors.pay && touched.pay
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.pay && touched.pay && (
                  <span className="input-feedback">{errors.pay}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Slug</Label>
                <Field
                  name="slug"
                  type="text"
                  values={values.slug}
                  placeholder="slug"
                  autoComplete="off"
                  className={
                    errors.slug && touched.slug
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.slug && touched.slug && (
                  <span className="input-feedback">{errors.slug}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>StatusId</Label>
                <Field
                  name="statusId"
                  type="text"
                  values={values.statusId}
                  placeholder="statusId"
                  autoComplete="off"
                  className={
                    errors.statusId && touched.statusId
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.statusId && touched.statusId && (
                  <span className="input-feedback">{errors.statusId}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>TechCommpanyId</Label>
                <Field
                  name="techCommpanyId"
                  type="text"
                  values={values.techCommpanyId}
                  placeholder="techCommpanyId"
                  autoComplete="off"
                  className={
                    errors.techCommpanyId && touched.techCommpanyId
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.techCommpanyId && touched.techCommpanyId && (
                  <span className="input-feedback">
                    {errors.techCommpanyId}
                  </span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Skills</Label>
                <Field
                  name="skills"
                  type="text"
                  values={values.skills}
                  placeholder="skills"
                  autoComplete="off"
                  className={
                    errors.skills && touched.skills
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.skills && touched.skills && (
                  <span className="input-feedback">{errors.skills}</span>
                )}
              </FormGroup>

              <Button type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};
export default JobForm;
