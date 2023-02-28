import * as yup from "yup";
import Shape from "../@types/shape";
import { TaskForm } from "../@types/task-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const taskFormSchema = yup.object().shape<Shape<TaskForm>>({
  task: yup.string().required("Campo obrigatório"),
  minutesAmount: yup.number().nullable().required("Campo obrigatório").min(5, "Valor mínimo de 5 minutos"),
});

export default yupResolver(taskFormSchema);
