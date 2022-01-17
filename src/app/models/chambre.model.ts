export interface Chambre {
    id: number,
    numero: number,
    superficie: number,
    type: 'simple' | 'double' | 'split-double';
    television: boolean;
    jacuzzi: boolean;
}