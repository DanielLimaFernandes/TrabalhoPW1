type Pet = {
    id: string;
    name: string;
    type: string;
    description: string;
    deadline_vaccination: Date;
    vaccinated: boolean;
    create_at: Date;
  };
  
  type Petshop = {
    id: string;
    cnpj: string;
    name: string;
    pets: Pet[];
  };
  
  declare namespace Express {
    export interface Request {
      petshop?: Petshop; // Propriedade opcional para armazenar o petshop associado
    }
  }