import { FC, useEffect } from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import { useQuery } from "react-query";
import { getFilteredCharacters } from "../../api/characters";
import { FaSearch } from "react-icons/fa";
import { Choices } from "./Characters";

type SearchFormProps = {
  handleCharacterData: (value: any) => void;
  handleName: (value: string) => void;
  choices: Choices;
};

export const SearchForm: FC<SearchFormProps> = ({
  handleCharacterData,
  handleName,
  choices,
}) => {
  let name = "";

  const { data: wantedChar, refetch } = useQuery(
    "wantedCharacter",
    () => getFilteredCharacters(choices, name, 1),
    {
      enabled: false,
    }
  );

  const initialValues = {
    wantedCharacter: "",
  };

  const schema = yup.object({
    wantedCharacter: yup.string(),
  });

  const handleSubmit = (values: any, { resetForm }: { resetForm: any }) => {
    name = values.wantedCharacter;
    handleName(name);
    refetch();
    resetForm();
  };

  useEffect(() => {
    handleCharacterData(wantedChar);
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
      <Form className="form">
        <Field
          className="form__input"
          name="wantedCharacter"
          type="text"
          placeholder="search for your favorite character..."
        />
        <button type="submit" className="form__button">
          <FaSearch />
        </button>
      </Form>
    </Formik>
  );
};
