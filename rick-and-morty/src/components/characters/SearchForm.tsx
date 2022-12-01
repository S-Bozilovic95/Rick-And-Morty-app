import { FC, useEffect } from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import { useQuery } from "react-query";
import { getFilteredCharacters } from "../../api/characters";
import { FaSearch } from "react-icons/fa";

type SearchFormProps = {
  handleSearch: (value: any) => void;
};

export const SearchForm: FC<SearchFormProps> = ({ handleSearch }) => {
  let name = "";

  const { data: wantedChar, refetch } = useQuery(
    "wantedCharacter",
    () => getFilteredCharacters(`name=${name}&status=alive`),
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

  useEffect(() => {
    handleSearch(wantedChar?.data.results[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wantedChar]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
      enableReinitialize
      handleSubmit
    >
      <Form className="characters__form">
        <Field
          className="characters__form__input"
          name="wantedCharacter"
          type="text"
        />
        <button type="submit" className="characters__form__button">
          <FaSearch />
        </button>
      </Form>
    </Formik>
  );
};
