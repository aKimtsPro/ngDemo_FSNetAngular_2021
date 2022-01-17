import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";


export const F_CHAMBRE_CREATE = {
    id: new FormControl(),
    numero: new FormControl(100, [Validators.required, Validators.min(100)] ),
    superficie: new FormControl(undefined, [Validators.required, Validators.min(0)]),
    type: new FormControl(undefined, [Validators.required]),
    television: new FormControl(true),
    jacuzzi: new FormControl(false)
}

export function simpleRoomValid(control: AbstractControl) : ValidationErrors | null {

    const type = control.value.type;
    const superficie = control.value.superficie;

    if( !type || !superficie )
        return {
            'simple-room-invalid': 'le type et la superficie doivent être définie'
        }

    if( type == 'double' || type == 'split-double' || (type == 'simple' && superficie >= 20 && superficie <= 30) )
        return null;

    return {
        'simple-room-invalid': 'une chambre simple doit avoir une superficie entre 20 et 30 m2'
    }


}

export function doubleRoomValid(control: AbstractControl) : ValidationErrors | null {

    const type = control.value.type;
    const superficie = control.value.superficie;

    if( !type || !superficie )
        return {
            'double-room-invalid': 'le type et la superficie doivent être définie'
        }

    if( type == 'simple' || ((type == 'double' || type == 'split-double' ) && superficie >= 30 && superficie <= 50) )
        return null;



    return {
        'double-room-invalid': 'une chambre double doit avoir une superficie entre 30 et 50 m2'
    }


}