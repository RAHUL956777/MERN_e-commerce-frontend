import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { server } from "../store";
import { MessageResponse, UserResponse } from "../../types/api-types";
import { User } from "../../types/types";
import axios from "axios";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/user/`,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    login: builder.mutation<MessageResponse, User>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const getUser = async (id: string) => {
  try {
    const { data }: { data: UserResponse } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/user/${id}`
    );
    return data;
  } catch (error) {
    console.log("Error While gettig user",error)
    throw error;
  }
};

export const { useLoginMutation } = userAPI;
