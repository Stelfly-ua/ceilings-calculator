export interface CeilingProfile {
  id: string;
  name: string;
  pricePerMeter: number;
}

export interface FabricType {
  id: string;
  name: string;
  pricePerSqM: number;
}

export interface LightingOption {
  id: string;
  name: string;
  pricePerPiece: number;
}

export interface Measurements {
  area: number;
  perimeter: number;
  quantity: number;
}

export interface CalculatorState {
  selections: {
    ceilingProfile: CeilingProfile | null;
    fabricType: FabricType | null;
    lighting: LightingOption[];
  };
  measurements: Measurements;
  pricing: {
    subtotal: number;
    tax: number;
    total: number;
  };
}

export interface CalculatorData {
  ceilingProfiles: CeilingProfile[];
  fabricTypes: FabricType[];
  lightingOptions: LightingOption[];
} 