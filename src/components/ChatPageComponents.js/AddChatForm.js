import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SecondaryButton } from "../buttons/SecondaryButton";

const errorSchema = Yup.object().shape({
  messageBody: Yup.string().required("Name is Required"),
});
export const AddChatForm = () => {
  const formik = useFormik({
    initialValues: {
      messageBody: "",
      messageId: uuidv4(),
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
    validationSchema: errorSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-row flex-wrap gap-2 w-11/12"
    >
      <input
        className="w-10/12 h-7 rounded-full p-2"
        type="text"
        id="messageBody"
        onChange={formik.handleChange("messageBody")}
        onBlur={formik.handleBlur("messageBody")}
        value={formik.values.messageBody}
        placeholder="Enter a message"
      />
      <SecondaryButton bgColor="bg-teal-900" text="Add Message" type="submit" />
    </form>
  );
};
