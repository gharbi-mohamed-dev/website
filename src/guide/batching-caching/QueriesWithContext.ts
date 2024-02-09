import { Effect } from "effect"
import * as Model from "./Model"
import * as RequestModel from "./RequestModel"
import * as ResolversWithContext from "./ResolversWithContext"

export const getTodos: Effect.Effect<
  Array<Model.Todo>,
  Model.GetTodosError,
  ResolversWithContext.HttpService
> = Effect.request(
  RequestModel.GetTodos({}),
  ResolversWithContext.GetTodosResolver
)