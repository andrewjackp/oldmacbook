import React from "react";
import { Form, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const EventForm = (props) => {
  return (
    <React.Fragment>
      <Formik
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          name: Yup.string(),
          headline: Yup.string(),
          description: Yup.string(),
          summary: Yup.string(),
          slug: Yup.string(),
          statusId: Yup.string(),
          dateStart: Yup.string(),
          dateEnd: Yup.string(),
          address: Yup.string(),
          zipCode: Yup.string(),
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
                <Label>Name</Label>
                <Field
                  name="name"
                  type="text"
                  values={values.name}
                  placeholder="name"
                  autoComplete="off"
                  className={
                    errors.name && touched.name
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.name && touched.name && (
                  <span className="input-feedback">{errors.name}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Headline</Label>
                <Field
                  name="headline"
                  type="text"
                  values={values.headline}
                  placeholder="headline"
                  autoComplete="off"
                  className={
                    errors.headline && touched.headline
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.headline && touched.headline && (
                  <span className="input-feedback">{errors.headline}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Field
                  name="description"
                  type="text"
                  values={values.description}
                  placeholer="description"
                  autoComplete="off"
                  className={
                    errors.description && touched.description
                      ? "form-control error"
                      : "form-control"
                  }
                ></Field>
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
                  placeholder="summary"
                  autoComplete="off"
                  className={
                    errors.summary && touched.summary
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.summary && touched.summary && (
                  <span className="input-feedback">{errors.summary}</span>
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
                <Label>DateStart</Label>
                <Field
                  name="DateStart"
                  type="text"
                  values={values.dateStart}
                  placeholder="slug"
                  autoComplete="off"
                  className={
                    errors.dateStart && touched.dateStart
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.dateStart && touched.dateStart && (
                  <span className="input-feedback">{errors.dateStart}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>DateEnd</Label>
                <Field
                  name="dateEnd"
                  type="text"
                  values={values.dateEnd}
                  placeholder="dateEnd"
                  autoComplete="off"
                  className={
                    errors.dateEnd && touched.dateEnd
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.dateEnd && touched.dateEnd && (
                  <span className="input-feedback">{errors.dateEnd}</span>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Address</Label>
                <Field
                  name="address"
                  type="text"
                  values={values.address}
                  placeholder="address"
                  autoComplete="off"
                  className={
                    errors.address && touched.address
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.address && touched.address && (
                  <span className="input-feedback">{errors.address}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label>ZipCode</Label>
                <Field
                  name="zipCode"
                  type="text"
                  values={values.zipCode}
                  placeholder="address"
                  autoComplete="off"
                  className={
                    errors.zipCode && touched.zipCode
                      ? "form-control error"
                      : "form-control"
                  }
                />
                {errors.zipCode && touched.zipCode && (
                  <span className="input-feedback">{errors.zipCode}</span>
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
export default EventForm;
