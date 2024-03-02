import { useForm } from "react-hook-form";

export const useContactForm = () => {
  const defaultVal = {
    name: "",
    email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultVal });

  const resetForm = () => {
    reset();
  };

  const throwError = () => {
    throw new Error("error");
  };

  const onSubmit = async data => {
    const url =
      "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts";
    const prams = {
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await fetch(url, prams);
      const contents = await resp.json();
      contents.message === "success!"
        ? window.alert("送信に成功しました")
        : throwError();
    } catch (e) {
      window.alert("送信に失敗しました");
    } finally {
      reset();
    }
  };

  return {
    handleSubmit,
    onSubmit,
    resetForm,
    register,
    formState: { errors, isSubmitting },
  };
};
