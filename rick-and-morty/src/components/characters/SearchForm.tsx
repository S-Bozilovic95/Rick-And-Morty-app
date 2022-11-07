import { FC } from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import { useQuery } from "react-query";
import { getFilteredCharacters } from "../../api/characters";

export const SearchForm: FC = () => {
  let name = "";

  const { data: wantedChar, refetch } = useQuery(
    "wantedCharacter",
    () => getFilteredCharacters(`name=${name}`),
    {
      enabled: false,
    }
  );

  const initialValues = {
    wantedCharacter: "",
  };

  const schema = yup.object({
    wantedCharacter: yup.string().required(),
  });

  const handleSubmit = (values: any, { resetForm }: { resetForm: any }) => {
    name = values.wantedCharacter;
    refetch();
    resetForm();
  };

  console.log(wantedChar);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
      enableReinitialize
      handleSubmit
    >
      <Form>
        <Field name="wantedCharacter" type="text" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
