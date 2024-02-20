// data.model.ts
export interface SpecData {
    userProfile: {
      name: string;
      email: string;
      address: string;
    };
    tasks: {
      id: number;
      title: string;
      completed: boolean;
    }[];
  }
  