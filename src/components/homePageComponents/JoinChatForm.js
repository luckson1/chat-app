import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "..";
import { db } from "../../utils/Database";
const errorSchema = Yup.object().shape({
  userName: Yup.string().required("Username is Required"),
});
export const JoinChatForm = () => {
  // Let's add some data to db:

  const addFriendHandler = async (values) => {
    try {
      const data = await db.friends.add(values);
      sessionStorage.setItem("userData", JSON.stringify(values));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //formik to handle form state
  const formik = useFormik({
    initialValues: {
      userName: "",
      userId: uuidv4(),
    },
    onSubmit: (values) => addFriendHandler(values),
    validationSchema: errorSchema,
  });
  const userDatFromStorage = sessionStorage.getItem("userData")
    ? JSON.parse(sessionStorage.getItem("userData"))
    : undefined;
  const navigate = useNavigate();
  useEffect(() => {
    if (userDatFromStorage) {
      navigate("/chat-room");
    }
  }, [userDatFromStorage]);

  return (
    <div className="absolute left-0 right-0 top-48 bg-white shadow-2xl h-40 w-80 rounded-lg ml-auto mr-auto flex flex-col items-center gap-3">
      <h1>Join Chat</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-row flex-wrap gap-2 px-2"
      >
        <input
          className="form-row-input border-b-2 border-b-indigo-500 rounded-none"
          type="text"
          id="userName"
          onChange={formik.handleChange("userName")}
          onBlur={formik.handleBlur("userName")}
          value={formik.values.userName}
          placeholder="Enter a UserName"
        />
        <Button bgColor="bg-cyan-500" text="Join" type="submit" />
        <div className="text-red-500">
          {formik.touched.userName && formik.errors.userName}
        </div>
      </form>
    </div>
  );
};
