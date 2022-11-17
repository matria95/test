import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkpassValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confermaPass = control.get('confermaPass');
  return password && confermaPass && password.value !== confermaPass.value
    ? { checkpass: true }
    : null;
};
