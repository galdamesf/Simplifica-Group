import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            {...register("nombre", { required: true, maxLength: 10 })}
          />
          {errors.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>El campo nombre debe tener menos de 10 caracteres</p>
          )}
        </div>
        <div>
          <label>Direccion</label>
          <input type="text" {...register("direccion", { required: true })} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("direccion", { required: true })} />
        </div>
        <div>
          <label>Edad</label>
          <input type="text" {...register("edad")} />
        </div>
        <div>
          <label>Pais</label>
          <select {...register("pais")}>
            <option value="chi">Chile</option>
            <option value="es">España</option>
            <option value="arg">Argenitina</option>
          </select>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
