export class LateChekcInValidationError extends Error {
  constructor() {
    super(
      'The check-in can only be validaetd until 20 minutes of its creation.',
    )
  }
}
