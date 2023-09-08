import { Effect, Exit } from "effect"

const fail = Effect.fail("Oh uh!")
const die = Effect.dieMessage("Boom!")

const program = fail.pipe(Effect.ensuring(die))

Effect.runPromiseExit(program).then((exit) => {
  if (Exit.isFailure(exit)) {
    console.log(exit.cause._tag)
    console.log(JSON.stringify(exit.cause, null, 2))
  }
})
/*
Output:
Sequential
{
  "_tag": "Cause",
  "errors": [
    {
      "message": "Error: Oh uh!"
    },
    {
      "message": "RuntimeException: Boom!"
    }
  ]
}
*/