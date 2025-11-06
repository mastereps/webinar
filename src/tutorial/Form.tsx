import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z.string().min(3, { message: "name must be atleast 3 characters..." }),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

console.log(schema);

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data, "wew");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto bg-amber-400"
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="name@flowbite.com"
        />
        {errors.name && (
          <p className="text-red-500 text-3xl">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="age"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          id="age"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
        {errors.age && (
          <p className="text-red-500 text-3xl">{errors.age.message}</p>
        )}
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 "
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
