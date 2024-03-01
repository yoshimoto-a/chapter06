import { useForm } from "react-hook-form";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultVal = {
    name: "",
    email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultVal });

  const resetForm = () => {
    reset();
  };

  const throwError = () => {
    throw new Error("error");
  };

  const onsubmit = async data => {
    setIsSubmitting(true);
    const url =
      "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts";
    const prams = {
      body: JSON.stringify({
        name: data.name,
        email: data.mail,
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
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div class="max-w-[800px] mx-auto py-10">
        <h1 class="text-xl font-bold mb-10">問合わせフォーム</h1>
        <form onSubmit={handleSubmit(onsubmit)} noValidate>
          <div class="flex justify-between items-center mb-6">
            <label for="name" class="w-[240px]">
              お名前
            </label>
            <div class="w-full">
              <input
                type="text"
                id="name"
                class="border border-gray-300 rounded-lg p-4 w-full"
                disabled={isSubmitting}
                {...register("name", {
                  required: "お名前は必須です。",
                  maxLength: {
                    value: 30,
                    message: "お名前は30文字以内で入力してください。",
                  },
                })}
              ></input>
              <div>{errors.name?.message}</div>
            </div>
          </div>
          <div class="flex justify-between items-center mb-6">
            <label for="email" class="w-[240px]">
              メールアドレス
            </label>
            <div class="w-full">
              <input
                type="email"
                id="email"
                class="border border-gray-300 rounded-lg p-4 w-full"
                disabled={isSubmitting}
                {...register("email", {
                  required: "メールアドレスは必須です。",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "メールアドレスの形式が不正です。",
                  },
                })}
              ></input>
              <div>{errors.email?.message}</div>
            </div>
          </div>
          <div class="flex justify-between items-center mb-6">
            <label for="message" class="w-[240px]">
              本文
            </label>
            <div class="w-full">
              <textarea
                id="message"
                rows="8"
                class="w-full border border-gray-300 rounded-lg p-4"
                disabled={isSubmitting}
                {...register("memo", {
                  required: "本文は必須です。",
                  maxLength: {
                    value: 500,
                    message: "本文は500文字以内で入力してください。",
                  },
                })}
              ></textarea>
              <div>{errors.memo?.message}</div>
            </div>
          </div>
          <div class="flex justify-center mt-10">
            <button
              type="submit"
              class="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4"
              disabled={isSubmitting}
            >
              送信
            </button>
            <button
              type="button"
              class="bg-gray-200 font-bold py-2 px-4 rounded-lg"
              disabled={isSubmitting}
              onClick={resetForm}
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
