import { AbstractControl, ValidationErrors } from "@angular/forms";

// Peu importe l'endroit ou on met la fonction (classe, fonctionne seul, fonction flechée)
// tant qu'elle a le bon type c'est un ValidatorFn

export function globalMarqueModele(control: AbstractControl): ValidationErrors | null{

    const prefix = (control.value.marque as string)?.substring(0,3);
    const modele = control.value.modele as string;

    if( !prefix || !modele )
        return {
            'marque-modele-absent': 'Le modele ou la marque n\'existe pas'
        }

    if( modele.startsWith(prefix + '-') )
        return null;

    return {
        'marque-modele-error': 'Le modele devrait commencer par les 3 premières lettre de la marque suivies d\'un -'
    }

}


export class VoitureValidators {

    static globalMarqueModele(control: AbstractControl): ValidationErrors | null{

        const prefix = (control.value.marque as string)?.substring(0,3);
        const modele = control.value.modele as string;

        if( !prefix || !modele )
            return {
                'marque-modele-absent': 'Le modele ou la marque n\'existe pas'
            }

        if( modele.startsWith(prefix + '-') )
            return null;

        return {
            'marque-modele-error': 'Le modele devrait commencer par les 3 premières lettre de la marque suivies d\'un -'
        }

    }

}