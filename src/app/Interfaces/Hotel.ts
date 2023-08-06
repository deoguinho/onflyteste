export interface Hotel {
    id: number;
    favorite: boolean;
    name: string;
    description: string;
    stars: string;
    thumb: string;
    amenities: object | null;
    hasBreakFast: boolean;
    hasRefundableRoom: boolean;
    hasAgreement: boolean;
    nonRefundable: any;
    address: {
      street: string;
      number: string;
      district: string | null;
      city: string;
      state: string;
      country: string;
      zipCode: any;
      fullAddress: string;
    };
    images: string;
    deals: any;
    roomsQuantity: number;
  }
  