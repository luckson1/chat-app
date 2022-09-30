import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { db } from "../../utils/Database";

const errorSchema = Yup.object().shape({
  body: Yup.string().required("Name is Required"),
});
export const AddChatForm = () => {
  //get id of loggedin User
  const userDatFromStorage = sessionStorage.getItem("userData")
    ? JSON.parse(sessionStorage.getItem("userData"))
    : undefined;

  const { userId, userName } = userDatFromStorage;
  //create a unique identifier
  const uniqueIdentifier = `${userName}${userId.slice(4, 8)}`;

  //handle adding task
  const addMessageHandler = async (values) => {
    try {
      const data = await db.messages.add(values);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      body: "",
      alias: uniqueIdentifier,
      creator: userId,
    },

    onSubmit: (values, { resetForm }) => {
      addMessageHandler(values);
      resetForm({ values: "" });
    },
    validationSchema: errorSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-row flex-wrap gap-1 md:gap-2 w-11/12"
    >
      <input
        className=" w-6/12 md:w-8/12 h-7 rounded-full p-2"
        type="text"
        id="body"
        onChange={formik.handleChange("body")}
        onBlur={formik.handleBlur("body")}
        value={formik.values.body}
        placeholder="Enter a message"
      />
      <SecondaryButton bgColor="bg-teal-900" text="Add Message" type="submit" />
    </form>
  );
};
