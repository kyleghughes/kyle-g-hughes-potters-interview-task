import axios, { type AxiosResponse } from "axios";
import type { SaveOnNextBreakForm } from "../validation/saveOnNextBreakSchema";

/**
 * Submits the "Save On Next Break" form data to the technical API endpoint.
 * Builds the request payload by normalizing the user's name and including
 * optional mobile number when provided.
 */
export const submitSaveOnNextBreak = async (
  data: SaveOnNextBreakForm,
): Promise<AxiosResponse> => {
  const payload = {
    name: data.fullName.replace(/\s+/g, ""),
    email: data.email,
    ...(data.mobile && {
      mobile: data.mobile,
    }),
  };

  return axios.post("https://api.yourpotters.com/api/technical", payload);
};
